import LogoLoop from '../components/LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';
import { useTheme } from './ThemeProvider';

const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

export function Companies() {
    const { theme } = useTheme();
    return (
        <section className="py-10 bg-background text-foreground transition-colors">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col items-center text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-3 bg-clip-text text-foreground">
                        Technologies I've Used
                    </h2>
                    <div className="w-20 h-1 bg-primary rounded-full mb-6"></div>
                    <p className="max-w-[700px] text-muted-foreground">
                        I have created several projects using the following technologies.
                    </p>
                </div>
                <div style={{ height: '90px', position: 'relative', overflow: 'hidden' }}>
                    <LogoLoop
                        logos={techLogos}
                        speed={100}
                        direction="left"
                        logoHeight={70}
                        gap={100}
                        pauseOnHover
                        scaleOnHover
                        fadeOut
                        fadeOutColor={theme === "light" ? "hsl(330deg 100% 98.82%)" : "#020817"}
                        ariaLabel="I have created several projects using the following technologies."
                    />
                </div>
            </div>
        </section>
    );
}