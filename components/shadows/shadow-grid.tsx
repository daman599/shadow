import { ShadowCard } from "./shadow-card";
import { Shadow } from "@/types/shadow";

export const ShadowGrid = ({ shadows }: { shadows: Shadow[] }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-14 flex-wrap px-1">
            {shadows.map((item) => (
                <div key={item.id}>
                    <ShadowCard shadow={item} />
                </div>
            ))}
        </div>
    );
}