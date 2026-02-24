import { Shadow } from "@/types/shadow";

export const Shadows: Shadow[] = [
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
        id: "box-3d-extrude-26",
        category: "box",
        name: "3D Extrude Stack",
        vanillaCss: "box-shadow: 1px 1px 0px #ccc, 2px 2px 0px #bbb, 3px 3px 0px #aaa, 4px 4px 0px #999;",
        tailwindCss: "shadow-[1px_1px_0px_#ccc,2px_2px_0px_#bbb,3px_3px_0px_#aaa,4px_4px_0px_#999]",
        style: "border border-neutral-300"
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
        id: "text-subtle-shadow",
        category: "text",
        name: "Subtle Shadow",
        vanillaCss: "text-shadow: 1px 1px 2px rgba(0,0,0,0.2);",
        tailwindCss: "text-shadow-[1px_1px_2px_rgba(0,0,0,0.2)]",
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
        name: "Bold Glow",
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

