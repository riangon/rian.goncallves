import {Card, CardHeader, CardBody} from "@nextui-org/card";
import {Divider} from "@nextui-org/divider";

export function Content() {
    return (
        <main className="flex flex-col items-center justify-center mt-12 gap-20">
            <div className="flex gap-20 mb-12">
                <div>
                    <Card className="w-72 h-72 bg-tertiary">
                        <CardHeader className="flex justify-center h-12 text-white font-bold text-2xl">
                            SYNC SYSTEM
                        </CardHeader>
                        <Divider className="bg-secondary"/>
                        <CardBody >
                            <p className="font-semibold">Você já acertou um iminigo mas o dano não foi contabilizado? o nosso sistema de sincronização evita esse tipo de situação. quando você estiver em situação de confronto e você acertar de fato o adversário todo o dano causado será contabilizado independente de ping ou fps, assim trazendo uma excelente experiencia para os jogadores.</p>
                        </CardBody>
                    </Card>
                </div>

                <div>
                    <Card className="w-72 h-72 bg-tertiary">
                        <CardHeader className="flex justify-center h-12 text-white font-bold text-2xl">
                            SKILL SYSTEM
                        </CardHeader>
                        <Divider className="bg-secondary"/>
                        <CardBody >
                            <p className="font-semibold">Nosso sistema de habilidade possui 10 leveis, todos começam no level 1. “Como vou subir de level” O sistema funciona da seguinte maneira: a cada kill que você fizer você ganhará x pontos, esse valor varia de acordo com o level do seu adversário caso você elimite alguém com o level superior ao seu, você, ganhará mais pontos, mas se o level for inferior você ganhará menos, mas caso você morra você perderá pontos.  
                            </p>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </main>
    )
}