import { Shadow } from "@/types/shadow";

export const Shadows: Shadow[] = [
    {
        id: "box-strong-sharp-black",
        category: "box",
        name: "Strong Sharp Black",
        style: "border border-black",
        vanillaCss: "boxShadow: 2px 2px 0px 2px rgb(0,0,0)",
        tailwindCss: "shadow-[2px_2px_0px_2px_rgb(0,0,0)]"
    },
    {
        id: "box-heavy-black",
        category: "box",
        name: "Heavy Black",
        style: "border border-black",
        vanillaCss: "boxShadow: 5px 5px 0px 5px rgb(0, 0, 0) ",
        tailwindCss: "shadow-[5px_5px_0px_5px_rgb(0,0,0)]"
    },
    {
        id: "box-extra-heavy-black",
        category: "box",
        name: "Extra Heavy Black",
        style: "border border-black",
        vanillaCss: "box-shadow: 12px 8px 0px 5px rgb(0,0,0)",
        tailwindCss: "shadow-[12px_8px_0px_5px_rgb(0,0,0)]"
    },
    {
        id: "box-offset-frame-cut",
        category: "box",
        name: "Frame Cut Offset",
        style: "border-2 border-black",
        vanillaCss: "box-shadow: 10px 10px 0px -4px #000;",
        tailwindCss: "shadow-[10px_10px_0px_-4px_#000]"
    },
    {
        id: "box-offset-glow-stack",
        category: "box",
        name: "Offset Glow Stack",
        style: "border border-black",
        vanillaCss: "box-shadow: 6px 6px 0px #000, 12px 12px 20px rgba(0,0,0,0.3);",
        tailwindCss: "shadow-[6px_6px_0px_#000,12px_12px_20px_rgba(0,0,0,0.3)]"
    },
    {
        id: "box-depth-fade-stack",
        category: "box",
        name: "Depth Fade Stack",
        style: "border border-neutral-800",
        vanillaCss: "box-shadow: 4px 4px 0px rgba(0,0,0,0.8), 8px 8px 0px rgba(0,0,0,0.5), 12px 12px 0px rgba(0,0,0,0.2);",
        tailwindCss: "shadow-[4px_4px_0px_rgba(0,0,0,0.8),8px_8px_0px_rgba(0,0,0,0.5),12px_12px_0px_rgba(0,0,0,0.2)]"
    },
    {
        id: "box-offset-depth-hard",
        category: "box",
        name: "Hard Depth Offset",
        style: "border border-black",
        vanillaCss: "box-shadow: 10px 10px 0px #000, 20px 20px 0px rgba(0,0,0,0.2);",
        tailwindCss: "shadow-[10px_10px_0px_#000,20px_20px_0px_rgba(0,0,0,0.2)]"
    },
    {
        id: "box-offset-pop-outline",
        category: "box",
        name: "Pop Outline Offset",
        style: "border-2 border-black",
        vanillaCss: "box-shadow: 0 0 0 4px #fff, 10px 10px 0px #000;",
        tailwindCss: "shadow-[0_0_0_4px_#fff,10px_10px_0px_#000]"
    },
    {
        id: "box-double-side-offset",
        category: "box",
        name: "Double Side Offset",
        style: "border border-black",
        vanillaCss: "box-shadow: 8px 8px 0px #000, -8px -8px 0px #000;",
        tailwindCss: "shadow-[8px_8px_0px_#000,-8px_-8px_0px_#000]"
    },
    {
        id: "box-offset-shadow-trail",
        category: "box",
        name: "Shadow Trail Illusion",
        style: "border border-black",
        vanillaCss: "box-shadow: 2px 2px 0px #000, 4px 4px 0px #000, 6px 6px 0px #000, 8px 8px 0px #000;",
        tailwindCss: "shadow-[2px_2px_0px_#000,4px_4px_0px_#000,6px_6px_0px_#000,8px_8px_0px_#000]"
    },
    {
        id: "box-offset-multi-layer-illusion",
        category: "box",
        name: "Multi Layer Illusion",
        style: "border border-neutral-900",
        vanillaCss: "box-shadow: 3px 3px 0px #ccc, 6px 6px 0px #999, 9px 9px 0px #666, 12px 12px 0px #000;",
        tailwindCss: "shadow-[3px_3px_0px_#ccc,6px_6px_0px_#999,9px_9px_0px_#666,12px_12px_0px_#000]"
    },
    {
        id: "box-long-diagonal-extrude",
        category: "box",
        name: "Long Diagonal Extrude",
        style: "border border-neutral-800",
        vanillaCss: "box-shadow: 4px 4px 0px #999, 8px 8px 0px #777, 12px 12px 0px #555, 16px 16px 0px #333;",
        tailwindCss: "shadow-[4px_4px_0px_#999,8px_8px_0px_#777,12px_12px_0px_#555,16px_16px_0px_#333]"
    },
    {
        id: "box-3d-extrude-26",
        category: "box",
        name: "3D Extrude Stack",
        vanillaCss: "box-shadow: 1px 1px 0px #ccc, 2px 2px 0px #bbb, 3px 3px 0px #aaa, 4px 4px 0px #999;",
        tailwindCss: "shadow-[1px_1px_0px_#ccc,2px_2px_0px_#bbb,3px_3px_0px_#aaa,4px_4px_0px_#999]",
        style: "border border-neutral-300"
    },
    {
        id: "box-offset-layer-stack",
        category: "box",
        name: "Offset Layer Stack",
        style: "border border-neutral-200",
        vanillaCss: "box-shadow: 8px 8px 0px #e5e5e5, 16px 16px 0px #d4d4d4;",
        tailwindCss: "shadow-[8px_8px_0px_#e5e5e5,16px_16px_0px_#d4d4d4]"
    },
    {
        id: "box-dramatic-long-shadow",
        category: "box",
        name: "Dramatic Long Shadow",
        style: "border border-black",
        vanillaCss: "box-shadow: 20px 20px 0px rgba(0,0,0,0.4);",
        tailwindCss: "shadow-[20px_20px_0px_rgba(0,0,0,0.4)]"
    },
    {
        id: "box-asymmetric-depth-cut",
        category: "box",
        name: "Asymmetric Depth Cut",
        style: " border border-black",
        vanillaCss: "box-shadow: inset -8px -8px 15px rgba(0,0,0,0.25), 12px 12px 0px #000;",
        tailwindCss: "shadow-[inset_-8px_-8px_15px_rgba(0,0,0,0.25),12px_12px_0px_#000]"
    },
    {
        id: "box-neo-brutal-pink",
        category: "box",
        name: "Neo Brutal Pink",
        style: "border-2 border-black",
        vanillaCss: "box-shadow: 6px 6px 0px #ff69b4;",
        tailwindCss: "shadow-[6px_6px_0px_#ff69b4]"
    },
    {
        id: "box-retro-pop-art",
        category: "box",
        name: "Retro Pop Art",
        style: "border-2 border-black",
        vanillaCss: "box-shadow: 8px 0px 0px #ff006e, 0px 8px 0px #3a86ff;",
        tailwindCss: "shadow-[8px_0px_0px_#ff006e,0px_8px_0px_#3a86ff]"
    },
    {
        id: "box-split-rgb-glitch",
        category: "box",
        name: "RGB Split Glitch",
        style: "border border-black",
        vanillaCss: "box-shadow: 4px 0px 0px #ff0000, -4px 0px 0px #00ffff;",
        tailwindCss: "shadow-[4px_0px_0px_#ff0000,-4px_0px_0px_#00ffff]"
    },
    {
        id: "box-offset-color-pop",
        category: "box",
        name: "Offset Color Pop",
        style: "border border-black",
        vanillaCss: "box-shadow: 6px 6px 0px #ff4d6d, 12px 12px 0px #4cc9f0, 18px 18px 0px #000;",
        tailwindCss: "shadow-[6px_6px_0px_#ff4d6d,12px_12px_0px_#4cc9f0,18px_18px_0px_#000]"
    },
    {
        id: "box-brutal-triple-stack",
        category: "box",
        name: "Brutal Triple Stack",
        style: "border-2 border-black",
        vanillaCss: "box-shadow: 5px 5px 0px #000, 10px 10px 0px #ffcc00, 15px 15px 0px #000;",
        tailwindCss: "shadow-[5px_5px_0px_#000,10px_10px_0px_#ffcc00,15px_15px_0px_#000]"
    },
    {
        id: "box-paper-lift-corner",
        category: "box",
        name: "Paper Lift Corner",
        style: "border border-neutral-300",
        vanillaCss: "box-shadow: 0 20px 15px -15px rgba(0,0,0,0.5);",
        tailwindCss: "shadow-[0_20px_15px_-15px_rgba(0,0,0,0.5)]"
    },
    {
        id: "box-soft-outline-01",
        category: "box",
        name: "Soft Outline",
        style: "border border-neutral-300",
        vanillaCss: "boxShadow: 5px 5px 0px 5px rgb(0,0,0)",
        tailwindCss: "shadow-[0px_0px_2px_2px_rgb(211,211,211)]"
    },
    {
        id: "box-subtle-edge-right-gray",
        category: "box",
        name: "Subtle Edge Right",
        style: "border border-neutral-300",
        vanillaCss: "boxShadow: 2px 0px 2px 2px rgb(211,211,211)",
        tailwindCss: "shadow-[2px_0px_2px_2px_rgb(211,211,211)]"
    },
    {
        id: "box-subtle-bottom-right-gray",
        category: "box",
        name: "Subtle Bottom Right",
        style: "border border-neutral-300",
        vanillaCss: "boxShadow:2px 2px 2px 2px rgb(211,211,211)",
        tailwindCss: "shadow-[2px_2px_2px_2px_rgb(211,211,211)]"
    },
    {
        id: "box-soft-glow",
        category: "box",
        name: "Soft Glow",
        style: "rounded-lg border border-neutral-100",
        vanillaCss: "box-shadow: 0px 0px 10px 5px rgb(245,245,245);",
        tailwindCss: "shadow-[0px_0px_10px_5px_rgb(245,245,245)]"
    },
    {
        id: "box-light-glow",
        category: "box",
        name: "Light Glow",
        style: "rounded-lg border border-neutral-100",
        vanillaCss: "box-shadow: 0px 0px 15px 3px rgb(220,220,220);",
        tailwindCss: "shadow-[0px_0px_15px_3px_rgb(220,220,220)]"
    },
    {
        id: "box-soft-bottom-left",
        category: "box",
        name: "Soft Bottom Left",
        style: "rounded-lg border border-neutral-100",
        vanillaCss: "box-shadow: -1px 5px 5px 4px rgb(220,220,220);",
        tailwindCss: "shadow-[-1px_5px_5px_4px_rgb(220,220,220)]"
    },
    {
        id: "box-3d-emboss-25",
        category: "box",
        name: "Emboss Surface",
        vanillaCss: "box-shadow: inset 2px 2px 4px rgba(0,0,0,0.2), inset -2px -2px 4px rgba(255,255,255,0.7);",
        tailwindCss: "shadow-[inset_2px_2px_4px_rgba(0,0,0,0.2),inset_-2px_-2px_4px_rgba(255,255,255,0.7)]",
        style: "rounded-xl"
    },
    {
        id: "inset-press-04",
        category: "box",
        name: "Inset Pressed Effect",
        vanillaCss: "box-shadow: inset 0 4px 6px rgba(0,0,0,0.2)",
        tailwindCss: "shadow-[inset_0_4px_6px_rgba(0,0,0,0.2)]",
        style: "rounded-xl"
    },
    {
        id: "box-inner-outer-10",
        category: "box",
        name: "Inner Outer Depth",
        vanillaCss: "box-shadow: inset 0 2px 4px rgba(0,0,0,0.2), 0 10px 25px rgba(0,0,0,0.15);",
        tailwindCss: "shadow-[inset_0_2px_4px_rgba(0,0,0,0.2),0_10px_25px_rgba(0,0,0,0.15)]",
        style: "rounded-xl"
    },
    {
        id: "box-neo-soft-05",
        category: "box",
        name: "Soft Neumorphism",
        vanillaCss: "box-shadow: 6px 6px 12px #cfd9e6, -6px -6px 12px #ffffff;",
        tailwindCss: "shadow-[6px_6px_12px_#cfd9e6,-6px_-6px_12px_#ffffff]",
        style: "rounded-xl"
    },
    {
        id: "box-soft-glow-pink",
        category: "box",
        name: "Soft Glow Pink",
        style: "rounded-lg border border-neutral-100",
        vanillaCss: "boxShadow: 0px 0px 30px 12px rgb(255, 240, 245);",
        tailwindCss: "shadow-[0px_0px_30px_12px_rgb(255,240,245)]"
    },
    {
        id: "box-inner-glow-pink",
        category: "box",
        name: "Inner Glow Pink",
        style: "rounded-lg border border-neutral-100",
        vanillaCss: "box-shadow: inset 0px 0px 30px 12px rgb(255,240,245);",
        tailwindCss: "shadow-[inset_0px_0px_30px_12px_rgb(255,240,245)]"
    },
    {
        id: "box-soft-glow-cyan",
        category: "box",
        name: "Soft Glow Cyan",
        style: "rounded-lg border border-neutral-100",
        vanillaCss: "box-shadow: 0px 10px 6px 3px rgb(240,255,255);",
        tailwindCss: "shadow-[0px_10px_6px_3px_rgb(240,255,255)]"
    },
    {
        id: "box-soft-bottom-weight-29",
        category: "box",
        name: "Bottom Weight Depth",
        vanillaCss: "box-shadow: 0 25px 20px -15px rgba(0,0,0,0.35);",
        tailwindCss: "shadow-[0_25px_20px_-15px_rgba(0,0,0,0.35)]",
        style: "rounded-xl"
    },
    {
        id: "box-card-hover-depth-27",
        category: "box",
        name: "Hover Depth Rise",
        vanillaCss: "box-shadow: 0 5px 10px rgba(0,0,0,0.15), 0 15px 30px rgba(0,0,0,0.2);",
        tailwindCss: "shadow-[0_5px_10px_rgba(0,0,0,0.15),0_15px_30px_rgba(0,0,0,0.2)]",
        style: "rounded-xl"
    },
    {
        id: "box-lux-float-01",
        category: "box",
        name: "Subtle Glow",
        vanillaCss: "box-shadow: 0 1px 2px rgba(0,0,0,0.05), 0 8px 20px rgba(0,0,0,0.08), 0 20px 40px rgba(0,0,0,0.12);",
        tailwindCss: "shadow-[0_1px_2px_rgba(0,0,0,0.05),0_8px_20px_rgba(0,0,0,0.08),0_20px_40px_rgba(0,0,0,0.12)]",
        style: "rounded-xl"
    },
    {
        id: "box-3d-long-drop-21",
        category: "box",
        name: "3D Long Drop",
        vanillaCss: "box-shadow: 0 8px 0px #d4d4d4, 0 16px 0px #bfbfbf, 0 24px 30px rgba(0,0,0,0.25);",
        tailwindCss: "shadow-[0_8px_0px_#d4d4d4,0_16px_0px_#bfbfbf,0_24px_30px_rgba(0,0,0,0.25)]",
        style: "rounded-lg"
    },
    {
        id: "box-dual-ambient-02",
        category: "box",
        name: "Dual Ambient Glow",
        vanillaCss: "box-shadow: 0 0 25px rgba(0,200,255,0.5), 0 0 50px rgba(255,0,200,0.4);",
        tailwindCss: "shadow-[0_0_25px_rgba(0,200,255,0.5),0_0_50px_rgba(255,0,200,0.4)]",
        style: "rounded-xl"
    },
    {
        id: "box-3d-frame-layer-30",
        category: "box",
        name: "3D Frame Layer",
        vanillaCss: "box-shadow: 0 0 0 4px white, 0 8px 20px rgba(0,0,0,0.2);",
        tailwindCss: "shadow-[0_0_0_4px_white,0_8px_20px_rgba(0,0,0,0.2)]",
        style: "rounded-xl"
    },
    {
        id: "box-deep-dark-06",
        category: "box",
        name: "Deep Dark Elevation",
        vanillaCss: "box-shadow: 0 30px 60px rgba(0,0,0,0.7);",
        tailwindCss: "shadow-[0_30px_60px_rgba(0,0,0,0.7)]",
        style: "rounded-xl"
    },

    {
        id: "text-strong-shadow",
        category: "text",
        name: "Strong Shadow",
        vanillaCss: "text-shadow: 4px 4px 3px rgba(0,0,0,0.5);",
        tailwindCss: "text-shadow-[4px_4px_3px_rgba(0,0,0,0.5)]",
        style: "border border-neutral-300 rounded-lg"
    },
    {
        id: "text-subtle-shadow-gray",
        category: "text",
        name: "Subtle Shadow Gray",
        vanillaCss: "text-shadow: 3px 3px 1px rgb(211,211,211);",
        tailwindCss: "text-shadow-[3px_3px_1px_rgb(211,211,211)]",
        style: "border border-neutral-300 rounded-lg"
    },
    {
        id: "text-soft-shadow-gray",
        category: "text",
        name: "Soft Shadow Gray",
        vanillaCss: "text-shadow: 2px 3px 2px rgb(211,211,211);",
        tailwindCss: "text-shadow-[2px_3px_2px_rgb(211,211,211)]",
        style: "border border-neutral-300 rounded-lg"
    },
    {
        id: "text-soft-emboss",
        category: "text",
        name: "Soft Emboss",
        vanillaCss: "text-shadow: -1px -1px 1px rgba(255,255,255,0.6), 1px 1px 2px rgba(0,0,0,0.3);",
        tailwindCss: "text-shadow-[-1px_-1px_1px_rgba(255,255,255,0.6),1px_1px_2px_rgba(0,0,0,0.3)]",
        style: "border border-neutral-300 rounded-lg"
    },
    {
        id: "text-lifted-shadow",
        category: "text",
        name: "Lifted Shadow",
        vanillaCss: "text-shadow: 1px 6px 2px rgba(0,0,0,0.2);",
        tailwindCss: "text-shadow-[1px_6px_2px_rgba(0,0,0,0.2)]",
        style: "border border-neutral-300 rounded-lg"
    },
    {
        id: "text-glow-magenta",
        category: "text",
        name: "Glow Magenta",
        vanillaCss: "text-shadow: 0px 0px 10px rgb(255,0,255);",
        tailwindCss: "text-shadow-[0px_0px_10px_rgb(255,0,255)]",
        style: "border border-neutral-300 rounded-lg"
    },
    {
        id: "text-bold-glow",
        category: "text",
        name: "Bold Shadow",
        vanillaCss: "text-shadow: 2px 2px 0px black, 0px 0px 10px rgb(255,240,245)",
        tailwindCss: "text-shadow-[2px_2px_0px_black,0px_0px_10px_rgb(255,240,245)]",
        style: "border border-neutral-300 rounded-lg"
    },
    {
        id: "text-medium-shadow",
        category: "text",
        name: "Medium Shadow",
        vanillaCss: "text-shadow: 3px 3px 1px black",
        tailwindCss: "text-shadow-[3px_3px_1px_black]",
        style: "border border-neutral-300 rounded-lg"
    },
    {
        id: "text-rainbow-shadow",
        category: "text",
        name: "Rainbow Shadow",
        vanillaCss: "text-shadow: 1px 1px 0px red, 2px 2px 0px orange, 3px 3px 0px yellow",
        tailwindCss: "text-shadow-[1px_1px_0px_red,2px_2px_0px_orange,3px_3px_0px_yellow]",
        style: "border border-neutral-300 rounded-lg"
    },
    {
        id: "text-3d-stack-pop",
        category: "text",
        name: "3D Stack Pop",
        vanillaCss: "text-shadow: 1px 1px 0 #000, 2px 2px 0 #000, 3px 3px 0 #000;",
        tailwindCss: "text-shadow-[1px_1px_0_#000,2px_2px_0_#000,3px_3px_0_#000]",
        style: "border border-neutral-300 rounded-lg"
    },
    {
        id: "text-glitch-split",
        category: "text",
        name: "Glitch Split",
        vanillaCss: "text-shadow: -2px 0 #ff004c, 2px 0 #00f7ff;",
        tailwindCss: "text-shadow-[-2px_0_#ff004c,2px_0_#00f7ff]",
        style: "border border-neutral-300 rounded-lg"
    },
    {
        id: "text-holographic-glow",
        category: "text",
        name: "Holographic Glow",
        vanillaCss: "text-shadow: 0 0 4px #ffffff, 0 0 10px #00f7ff, 0 0 20px #ff00c8;",
        tailwindCss: "text-shadow-[0_0_4px_#ffffff,0_0_10px_#00f7ff,0_0_20px_#ff00c8]",
        style: "border border-neutral-300 rounded-lg"
    },
    {
        id: "text-long-shadow-drift",
        category: "text",
        name: "Long Shadow Drift",
        vanillaCss: "text-shadow: 2px 2px 0 #000000, 4px 4px 0 #000000, 6px 6px 0 #000000, 8px 8px 0 #000000;",
        tailwindCss: "text-shadow-[2px_2px_0_#000000,4px_4px_0_#000000,6px_6px_0_#000000,8px_8px_0_#000000]",
        style: "border border-neutral-300 rounded-lg"
    },
    {
        id: "text-inner-light-pop",
        category: "text",
        name: "Inner Light Pop",
        vanillaCss: "text-shadow: 0 -1px 0 rgba(255,255,255,0.8), 0 3px 6px rgba(0,0,0,0.4);",
        tailwindCss: "text-shadow-[0_-1px_0_rgba(255,255,255,0.8),0_3px_6px_rgba(0,0,0,0.4)]",
        style: "border border-neutral-300 rounded-lg"
    },
    {
        id: "text-toxic-green-glow",
        category: "text",
        name: "Toxic Green Glow",
        vanillaCss: "text-shadow: 0 0 5px #39ff14, 0 0 15px #39ff14, 0 0 30px #00ff00;",
        tailwindCss: "text-shadow-[0_0_5px_#39ff14,0_0_15px_#39ff14,0_0_30px_#00ff00]",
        style: "border border-neutral-300 rounded-lg"
    },
    {
        id: "text-dual-depth-contrast",
        category: "text",
        name: "Dual Depth Contrast",
        vanillaCss: "text-shadow: 1px 1px 0 #000000, -1px -1px 0 #ffffff;",
        tailwindCss: "text-shadow-[1px_1px_0_#000000,-1px_-1px_0_#ffffff]",
        style: "border border-neutral-300 rounded-lg"
    },
    {
        id: "text-cinematic-blur-depth",
        category: "text",
        name: "Cinematic Blur Depth",
        vanillaCss: "text-shadow: 0 5px 10px rgba(0,0,0,0.5), 0 15px 25px rgba(0,0,0,0.3);",
        tailwindCss: "text-shadow-[0_5px_10px_rgba(0,0,0,0.5),0_15px_25px_rgba(0,0,0,0.3)]",
        style: "border border-neutral-300 rounded-lg"
    },
    {
        id: "text-candy-pop-outline",
        category: "text",
        name: "Candy Pop Outline",
        vanillaCss: "text-shadow: -2px -2px 0 #ff4da6, 2px -2px 0 #ff4da6, -2px 2px 0 #ff4da6, 2px 2px 0 #ff4da6;",
        tailwindCss: "text-shadow-[-2px_-2px_0_#ff4da6,2px_-2px_0_#ff4da6,-2px_2px_0_#ff4da6,2px_2px_0_#ff4da6]",
        style: "border border-neutral-300 rounded-lg"
    },
    {
        id: "text-moonlight-fade",
        category: "text",
        name: "Moonlight Fade",
        vanillaCss: "text-shadow: 0 0 8px rgba(173,216,230,0.7), 0 0 20px rgba(135,206,250,0.5);",
        tailwindCss: "text-shadow-[0_0_8px_rgba(173,216,230,0.7),0_0_20px_rgba(135,206,250,0.5)]",
        style: "border border-neutral-300 rounded-lg"
    },
    {
        id: "text-paper-cut-depth",
        category: "text",
        name: "Paper Cut Depth",
        vanillaCss: "text-shadow: 1px 1px 0 #d4d4d4, 2px 2px 0 #bfbfbf, 3px 3px 0 #a3a3a3, 4px 4px 0 #737373;",
        tailwindCss: "text-shadow-[1px_1px_0_#d4d4d4,2px_2px_0_#bfbfbf,3px_3px_0_#a3a3a3,4px_4px_0_#737373]",
        style: "border border-neutral-300 rounded-lg"
    },
    {
        id: "text-soft-lipstick-outline",
        category: "text",
        name: "Soft Lipstick Outline",
        vanillaCss: "text-shadow: -1px -1px 0 #ff6fa5, 1px -1px 0 #ff6fa5, -1px 1px 0 #ff6fa5, 1px 1px 0 #ff6fa5;",
        tailwindCss: "text-shadow-[-1px_-1px_0_#ff6fa5,1px_-1px_0_#ff6fa5,-1px_1px_0_#ff6fa5,1px_1px_0_#ff6fa5]",
        style: "border border-neutral-300 rounded-lg"
    },
    {
        id: "text-modern-layered-offset",
        category: "text",
        name: "Modern Layered Offset",
        vanillaCss: "text-shadow: 1px 1px 0 rgba(0,0,0,0.15), 2px 2px 0 rgba(0,0,0,0.1), 6px 6px 20px rgba(0,0,0,0.08);",
        tailwindCss: "text-shadow-[1px_1px_0_rgba(0,0,0,0.15),2px_2px_0_rgba(0,0,0,0.1),6px_6px_20px_rgba(0,0,0,0.08)]",
        style: "border border-neutral-200 rounded-xl"
    },
    {
        id: "text-sharp-editorial-lift",
        category: "text",
        name: "Sharp Editorial Lift",
        vanillaCss: "text-shadow: 0 1px 0 rgba(0,0,0,0.2), 0 12px 30px rgba(0,0,0,0.1);",
        tailwindCss: "text-shadow-[0_1px_0_rgba(0,0,0,0.2),0_12px_30px_rgba(0,0,0,0.1)]",
        style: "border border-neutral-200 rounded-xl"
    },
    {
        id: "text-future-soft-stack",
        category: "text",
        name: "Future Soft Stack",
        vanillaCss: "text-shadow: 0 3px 0 rgba(0,0,0,0.12), 0 6px 0 rgba(0,0,0,0.08), 0 20px 40px rgba(0,0,0,0.06);",
        tailwindCss: "text-shadow-[0_3px_0_rgba(0,0,0,0.12),0_6px_0_rgba(0,0,0,0.08),0_20px_40px_rgba(0,0,0,0.06)]",
        style: "border border-neutral-200 rounded-xl"
    },
    {
        id: "drop-shadow-soft-black",
        category: "drop",
        name: "Soft Black Shadow",
        vanillaCss: "filter: drop-shadow(4px 4px 4px rgba(0,0,0,0.5));",
        tailwindCss: "drop-shadow-[4px_4px_4px_rgba(0,0,0,0.5)]",
        style: "border border-neutral-300 rounded-lg"
    },
    {
        id: "drop-shadow-offset-soft",
        category: "drop",
        name: "Offset Soft Depth",
        vanillaCss: "filter: drop-shadow(10px 5px 2px rgba(0,0,0,0.3));",
        tailwindCss: "drop-shadow-[10px_5px_2px_rgba(0,0,0,0.3)]",
        style: "border border-neutral-300 rounded-lg"
    },
    {
        id: "drop-shadow-deep-dramatic",
        category: "drop",
        name: "Deep Dramatic Shadow",
        vanillaCss: "filter: drop-shadow(10px 10px 10px rgba(0,0,0,0.7));",
        tailwindCss: "drop-shadow-[10px_10px_10px_rgba(0,0,0,0.7)]",
        style: "border border-neutral-300 rounded-lg"
    },
    {
        id: "drop-shadow-bold-yellow",
        category: "drop",
        name: "Bold Yellow Shadow",
        vanillaCss: "filter: drop-shadow(6px 6px yellow);",
        tailwindCss: " drop-shadow-[6px_6px_yellow]",
        style: "border border-neutral-300 rounded-lg"
    },
    {
        id: "drop-shadow-angled-dramatic",
        category: "drop",
        name: "Angled Dramatic Shadow",
        vanillaCss: "filter: drop-shadow(20px -14px 10px rgba(0,0,0,0.6));",
        tailwindCss: "drop-shadow-[20px_-14px_10px_rgba(0,0,0,0.6)]",
        style: "border border-neutral-300 rounded-lg"
    },
    {
        id: "drop-shadow-soft-top-light",
        category: "drop",
        name: "Top Light Soft",
        vanillaCss: "filter: drop-shadow(0 -10px 6px rgba(0,0,0,0.3))",
        tailwindCss: "drop-shadow-[0_-10px_6px_rgba(0,0,0,0.3)]",
        style: "border border-neutral-300 rounded-lg"
    }
]

