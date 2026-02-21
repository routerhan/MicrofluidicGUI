import React, { useCallback, useEffect, useRef } from "react";

const GRID_CONFIG = {
    rows: 9,
    cols: ["A", "B", "C"],
    radius: 14,
    spacingX: 65,
    spacingY: 55,
};

function PatternCanvas({ points, onTogglePoint }) {
    const canvasRef = useRef(null);
    const layoutRef = useRef({ positions: {} });

    const drawCanvas = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        const width = canvas.clientWidth || 300;
        const height = canvas.clientHeight || 300;
        canvas.width = width;
        canvas.height = height;

        const gridWidth = (GRID_CONFIG.cols.length - 1) * GRID_CONFIG.spacingX;
        const gridHeight = (GRID_CONFIG.rows - 1) * GRID_CONFIG.spacingY;
        const centerX = width / 2;
        const centerY = height / 2;
        const offsetX = centerX - gridWidth / 2;
        const offsetY = centerY - gridHeight / 2;
        const palette = {
            bg: "#0c1220",
            border: "#17223a",
            gridFill: "#111a2d",
            gridStroke: "#213153",
            gridText: "#ffffffff",
            pathStart: "#98f0ff41",
            pathEnd: "#5a6a75ff",
            pathGlow: "rgba(152, 240, 255, 0.45)",
            nodeInner1: "#70b7e06c",
            nodeInner2: "#8ebbd9ff",
            nodeStroke: "#88ced8aa",
            nodeGlow: "rgba(143, 212, 223, 0.58)",
            nodeLabel: "#1c315cff",
        };

        const positions = {};

        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = palette.bg;
        ctx.fillRect(0, 0, width, height);
        ctx.strokeStyle = palette.border;
        ctx.lineWidth = 1.5;
        ctx.strokeRect(1, 1, width - 2, height - 2);

        ctx.fillStyle = palette.gridFill;
        ctx.strokeStyle = palette.gridStroke;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.font = "11px 'Inter', 'Segoe UI', Arial, sans-serif";
        for (let r = GRID_CONFIG.rows; r >= 1; r--) {
            const rowIdx = GRID_CONFIG.rows - r;
            for (let ci = 0; ci < GRID_CONFIG.cols.length; ci++) {
                const x = offsetX + ci * GRID_CONFIG.spacingX;
                const y = offsetY + rowIdx * GRID_CONFIG.spacingY;
                const col = GRID_CONFIG.cols[ci];
                positions[`${r}-${col}`] = { x, y };
                ctx.beginPath();
                ctx.arc(x, y, GRID_CONFIG.radius, 0, Math.PI * 2);
                ctx.fillStyle = palette.gridFill;
                ctx.fill();
                ctx.stroke();
                ctx.fillStyle = palette.gridText;
                ctx.fillText(col, x, y);
            }
        }

        const ordered = points.slice().sort((a, b) => (a.order || 0) - (b.order || 0));

        if (ordered.length > 1) {
            const first = positions[`${ordered[0].row}-${ordered[0].col}`];
            const last = positions[`${ordered[ordered.length - 1].row}-${ordered[ordered.length - 1].col}`];
            if (first && last) {
                const grad = ctx.createLinearGradient(first.x, first.y, last.x, last.y);
                grad.addColorStop(0, palette.pathStart);
                grad.addColorStop(1, palette.pathEnd);
                ctx.save();
                ctx.strokeStyle = grad;
                ctx.lineWidth = 4;
                ctx.lineJoin = "round";
                ctx.lineCap = "round";
                ctx.shadowColor = palette.pathGlow;
                ctx.shadowBlur = 12;
                ctx.beginPath();
                ordered.forEach((p, idx) => {
                    const pos = positions[`${p.row}-${p.col}`];
                    if (!pos) return;
                    if (idx === 0) {
                        ctx.moveTo(pos.x, pos.y);
                    } else {
                        ctx.lineTo(pos.x, pos.y);
                    }
                });
                ctx.stroke();
                ctx.restore();
            }
        }

        for (const p of ordered) {
            const pos = positions[`${p.row}-${p.col}`];
            if (!pos) continue;
            const radial = ctx.createRadialGradient(pos.x - 3, pos.y - 3, 3, pos.x, pos.y, GRID_CONFIG.radius + 2);
            radial.addColorStop(0, "#f4f8ff");
            radial.addColorStop(0.55, palette.nodeInner1);
            radial.addColorStop(1, palette.nodeInner2);
            ctx.save();
            ctx.fillStyle = radial;
            ctx.strokeStyle = palette.nodeStroke;
            ctx.lineWidth = 2;
            ctx.shadowColor = palette.nodeGlow;
            ctx.shadowBlur = 9;
            ctx.beginPath();
            ctx.arc(pos.x, pos.y, GRID_CONFIG.radius, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            ctx.restore();

            ctx.fillStyle = palette.nodeLabel;
            ctx.font = "bold 12px 'Inter', 'Segoe UI', Arial, sans-serif";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(p.col, pos.x, pos.y);
        }

        layoutRef.current = { positions, offsetX, offsetY };
    }, [points]);

    useEffect(() => {
        drawCanvas();
    }, [drawCanvas]);

    useEffect(() => {
        const onResize = () => drawCanvas();
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, [drawCanvas]);

    const handleClick = (e) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const positions = layoutRef.current.positions || {};
        let nearest = null;
        Object.entries(positions).forEach(([key, pos]) => {
            const dist = Math.hypot(pos.x - x, pos.y - y);
            if (dist <= GRID_CONFIG.radius * 1.1) {
                if (!nearest || dist < nearest.dist) {
                    nearest = { key, dist };
                }
            }
        });
        if (nearest) {
            const [row, col] = nearest.key.split("-");
            onTogglePoint(Number(row), col);
        }
    };

    return <canvas id="patternCanvas" ref={canvasRef} onClick={handleClick} />;
}

export default React.memo(PatternCanvas);
