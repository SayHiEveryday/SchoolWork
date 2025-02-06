import {Card, CardBody, CardHeader, Code, Listbox, ListboxItem, Image} from "@heroui/react";
import { Check, ScrollText, X} from "lucide-react";

export default function () {
    return (
        <section className={"max-h-svh h-full my-12 container mx-auto max-w-7xl px-6 flex-grow"} >
            <div className={"grid grid-cols-3 gap-3"}>      
                <Card className={"h-[630px]"}>
                    <CardHeader>
                        <h1 className={"text-xl font-bold"}>1. โครงสร้างแบบมีทางเลือกการทำงาน (if)</h1>
                    </CardHeader>
                    <CardBody className={"flex flex-col justify-evenly"}>
                        <Listbox className={""}>
                            <ListboxItem startContent={<Check/>}>
                                <p className={"text-md"}>ทำงานก็ต่อเมื่อเงื่อนไขที่กำหนดเป็น จริง (True)</p>
                            </ListboxItem>
                            <ListboxItem startContent={<X/>}>
                                <p>
                                    ถ้าเงื่อนไขเป็น เท็จ (False) โปรแกรมจะข้ามไปยังคำสั่งถัดไปโดยไม่ทำอะไร
                                </p>
                            </ListboxItem>
                        </Listbox>
                        <div>
                            <div className={"flex my-1"}>
                                <ScrollText/>
                                <h1 className={"font-bold ml-2 text-xl"}>หลักการทำงาน</h1>
                            </div>
                            <div className={"ml-4 my-2"}>
                                <p className={"my-1"}>1. ตรวจสอบเงื่อนไข</p>
                                <p className={"my-1"}>2. หากเงื่อนไขเป็นจริง ให้ดำเนินการคำสั่งภายในบล็อก if</p>
                                <p className={"my-1"}>3. หากเงื่อนไขเป็นเท็จ โปรแกรมจะข้ามคำสั่งใน if และทำงานต่อไป</p>
                            </div>
                        </div>
                        <div className={"flex"}>
                            <Code className={"h-full"}>
                                <div className={"flex flex-col"}>
                                    <div className={"flex"}>
                                        <p className={"mr-2 text-red-400"}>{"if"}</p>
                                        <p>{"("}</p>
                                        <p className={"text-cyan-500"}>statement</p>
                                        <p>{")"}</p>
                                        <p className={"ml-2 "}>{"{"}</p>
                                    </div>
                                    <div className={"flex"}>
                                        <p className={"text-default-500 ml-5"}>
                                            {"// ..."}
                                        </p>
                                    </div>
                                    <div>
                                        <p>{"}"}</p>
                                    </div>
                                </div>

                            </Code>
                            <div className={"flex"}>
                                <div className={"flex mx-2"}>
                                    <Image src="/if_flowchart.png" isBlurred={true} width={225}/>
                                </div>
                            </div>
                        </div>

                    </CardBody>
                </Card>
                <Card className={"h-[630px]"}>
                    <CardHeader>
                        <h1 className={"text-lg font-bold"}>2. โครงสร้างแบบมีทางเลือกการทำงาน (if-else)</h1>
                    </CardHeader>
                    <CardBody className={"flex flex-col justify-evenly"}>
                        <Listbox className={""}>
                            <ListboxItem>
                                <p className={"text-md"}>เพิ่มการจัดการกรณีที่เงื่อนไขเป็น เท็จ (False)</p>
                            </ListboxItem>
                            <ListboxItem>
                                <p>
                                    ถ้าเงื่อนไขเป็น จริง (True) จะทำคำสั่งในบล็อก if
                                </p>
                            </ListboxItem>
                            <ListboxItem>
                                <p>
                                    ถ้าเงื่อนไขเป็น เท็จ (False) จะทำคำสั่งในบล็อก else
                                </p>
                            </ListboxItem>
                        </Listbox>
                        <div>
                            <div className={"flex my-2"}>
                                <ScrollText/>
                                <h1 className={"font-bold ml-2 text-lg"}>หลักการทำงาน</h1>
                            </div>
                            <div className={"ml-4 my-2"}>
                                <p className={"my-1"}>1. ตรวจสอบเงื่อนไข</p>
                                <p className={"my-1"}>2. ถ้าเงื่อนไขเป็นจริง ให้ทำคำสั่งใน if</p>
                                <p className={"my-1"}>3. ถ้าเงื่อนไขเป็นเท็จ ให้ทำคำสั่งใน else</p>
                            </div>
                        </div>
                        <div className={"flex"}>
                            <Code className={"h-full"}>
                                <div className={"flex flex-col"}>
                                    <div className={"flex"}>
                                        <p className={"mr-2 text-red-400"}>{"if"}</p>
                                        <p>{"("}</p>
                                        <p className={"text-cyan-500"}>statement</p>
                                        <p>{")"}</p>
                                        <p className={"ml-2 "}>{"{"}</p>
                                    </div>
                                    <div className={"flex"}>
                                        <p className={"text-default-500 ml-5"}>
                                            {"// ..."}
                                        </p>
                                    </div>
                                    <div className={"flex"}>
                                        <p>{"}"}</p>
                                        <p className={"text-red-400 ml-2"}>{"else"}</p>
                                        <p className={"ml-2"}>{"{"}</p>
                                    </div>
                                    <div>
                                        <p className={"text-default-500 ml-4"}>{"// ..."}</p>
                                    </div>
                                    <div>
                                        <p>{"}"}</p>
                                    </div>
                                </div>

                            </Code>
                            <div className={"flex"}>
                                <div className={"flex mx-2"}>
                                    <Image src="/ifelse_flowchart.png" isBlurred={true} width={225}/>
                                </div>
                            </div>
                        </div>
                        

                    </CardBody>
                </Card>
                <Card className={"h-[630px]"}>
                    <CardHeader>
                        <h1 className={"text-lg font-bold"}>3. โครงสร้างแบบมีทางเลือกหลายทาง (if-else-if)</h1>
                    </CardHeader>
                    <CardBody className={"flex flex-col justify-evenly"}>
                        <Listbox className={""}>
                            <ListboxItem>
                                <p className={"text-md"}>ใช้เมื่อต้องการตรวจสอบหลายเงื่อนไขและเลือกทำงานตามเงื่อนไขที่ เป็นจริงเงื่อนไขแรกที่เจอ</p>
                            </ListboxItem>
                            <ListboxItem>
                                <p>
                                    เมื่อเงื่อนไขใดเงื่อนไขหนึ่งเป็น จริง โปรแกรมจะทำงานในบล็อกนั้น แล้วข้ามเงื่อนไขที่เหลือ
                                </p>
                            </ListboxItem>
                            <ListboxItem>
                                <p>
                                    ถ้าไม่มีเงื่อนไขใดเป็นจริงเลย สามารถใช้ else เพื่อกำหนดคำสั่งสำรอง
                                </p>
                            </ListboxItem>
                        </Listbox>
                        <div>
                            <div className={"flex my-2"}>
                                <ScrollText/>
                                <h1 className={"font-bold ml-2 text-lg"}>หลักการทำงาน</h1>
                            </div>
                            <div className={"ml-4 my-2"}>
                                <p className={"my-1"}>1. ตรวจสอบเงื่อนไขแรก ถ้าเป็นจริง ให้ทำงานในบล็อก if</p>
                                <p className={"my-1"}>2. ถ้าเป็นเท็จ ตรวจสอบเงื่อนไขถัดไป (else if)</p>
                                <p className={"my-1"}>3. ถถ้าไม่มีเงื่อนไขใดเป็นจริงเลย ให้ทำงานใน else</p>
                            </div>
                        </div>
                        <div className={"flex"}>
                            <Code className={"h-full"}>
                                <div className={"flex flex-col"}>
                                    <div className={"flex"}>
                                        <p className={"mr-2 text-red-400"}>{"if"}</p>
                                        <p>{"("}</p>
                                        <p className={"text-cyan-500"}>statement</p>
                                        <p>{")"}</p>
                                        <p className={"ml-2 "}>{"{"}</p>
                                    </div>
                                    <div className={"flex"}>
                                        <p className={"text-default-500 ml-5"}>
                                            {"// ..."}
                                        </p>
                                    </div>
                                    <div className={"flex"}>
                                        <p>{"}"}</p>
                                        <p className={"text-red-400 ml-2"}>{"else if"}</p>
                                        <p className={"ml-2"}>{"{"}</p>
                                    </div>
                                    <div className={"flex"}>
                                        <p className={"text-default-500 ml-5"}>
                                            {"// ..."}
                                        </p>
                                    </div>
                                    <div className={"flex"}>
                                        <p>{"}"}</p>
                                        <p className={"text-red-400 ml-2"}>{"else"}</p>
                                        <p className={"ml-2"}>{"{"}</p>
                                    </div>
                                    <div className={"flex"}>
                                        <p className={"text-default-500 ml-5"}>
                                            {"// ..."}
                                        </p>
                                    </div>
                                    <div>
                                        <p>{"}"}</p>
                                    </div>
                                </div>

                            </Code>
                            <div className={"flex"}>
                                <div className={"flex mx-2"}>
                                    <Image src="/ifelseif_flowchart.png" isBlurred={true} width={250}/>
                                </div>
                            </div>
                        </div>
                        
                </CardBody>
            </Card>
        </div>
</section>
)
}