import BaseButton from "@/components/base-button";

export default function TopBar() {
    return (
        <section className="border-b border-light mb-10">
            <div className="flex justify-between gap-20 mt-8 mb-4">
                <div className="flex items-center gap-3 py-2">
                    <p className="text-sm">Cybernetic tools, robots, software, networks, biopunk colourful design,Cybernetic.</p>
                    <div>
                        <BaseButton label="Generate" hasFullWidth={false} type="button" />
                    </div>
                </div>

                <div className="flex gap-3 items-center w-[170px] shrink-0">
                    <div className="size-11 overflow-hidden border border-light rounded-full">
                        <img className="w-full h-full object-cover" src="https://s3-alpha-sig.figma.com/img/8d37/837a/b10bac14aafc05c13bc80db6ce369d5d?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RA4f7AZF9cPAYSGMYTjIw0lznIRKsN3NOUxMhtnZt0WBLjpNSgkHz3lq5OP34z1eKp6cnSLsOBGLnvHnHkvzj1PuNsgSSMVdHWH-FmNSvRIUir8R3A6TuuEJsSI8bgSJbHK-FQNnr0e5C5VmmoGExAjN6ZRqU8OLx~8eLrdJn0bSdAX1xX-zB-1ByMHojj2l9N6R4tFr8mxdnNrhWJ3bvAlPMpFBzF~isJ4RLJJ5Ahhg0aJM~sAJQgNY6-upuAEv0~NBEiiVxBCDDXQnII4JuL82S5C1eAxE4-eY33DNHkdjbNHbXMXgUtk4WUtZ0jFb0g~-gDZ1dj9XGj6h0hHTbQ__" alt=""/>
                    </div>
                    <p className="text-sm text-nowrap">Nicholas Turner</p>
                </div>
            </div>

        </section>
    )
}
