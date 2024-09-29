import Banner from "../assets/banner.svg"

import {Button} from "@nextui-org/button";

export function Main() {
    return(
        <main>
            <img 
                className="flex w-screen"
                src={Banner}
            />

            <div>
                <h1 className="absolute top-[14rem] left-[11rem] text-primary font-bold text-3xl z-10">
                    JUNTE-SE AO MELHOR DO MTA DAYZ
                </h1>

                <h1 className="absolute top-[16rem] left-[23rem] text-primary font-bold text-sm z-10">
                    LEGENDS NEVER DIE
                </h1>

                <div className="flex gap-6">
                    <Button className="absolute top-[20rem] left-[18rem] w-32 gap-6 h-10 bg-tertiary text-primary font-bold z-20">Copiar IP</Button>
                    <Button className="absolute top-[20rem] left-[29rem] w-32 h-10 bg-tertiary text-primary font-bold z-20">Discord</Button>
                </div>
            </div>
        </main>
    )
}