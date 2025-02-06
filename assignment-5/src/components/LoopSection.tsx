import {Card, CardBody, CardHeader, Code, Image, Listbox, ListboxItem} from "@heroui/react";
import {ScrollText} from "lucide-react";

export default function () {
    return (
        <section className={"max-h-svh h-full my-12 container mx-auto max-w-7xl px-6 flex-grow"}>
            <div className={"grid grid-cols-3 gap-3"}>
                <Card className={"h-[630px]"}>
                    <CardHeader>
                        <h1 className={"text-xl font-bold"}>4. โครงสร้างแบบทำซ้ำ (for loop)</h1>
                    </CardHeader>
                    <CardBody className={"flex flex-col justify-evenly"}>
                        <Listbox className={""}>
                            <ListboxItem>
                                <p className={"text-md"}>ใช้เมื่อต้องการทำซ้ำจำนวนครั้งที่แน่นอน</p>
                            </ListboxItem>
                            <ListboxItem>
                                <p>
                                    มักใช้เมื่อต้องการวนลูปตามจำนวนรอบที่กำหนด เช่น ไล่ค่าตั้งแต่ 1 ถึง 10
                                </p>
                            </ListboxItem>
                        </Listbox>
                        <div>
                            <div className={"flex my-1"}>
                                <ScrollText/>
                                <h1 className={"font-bold ml-2 text-xl"}>หลักการทำงาน</h1>
                            </div>
                            <div className={"ml-4 my-2"}>
                                <p className={"my-1"}>1. กำหนดค่าตัวแปรเริ่มต้น</p>
                                <p className={"my-1"}>2. ตรวจสอบเงื่อนไข ถ้าเป็นจริงให้ทำงานในลูป</p>
                                <p className={"my-1"}>3. เมื่อทำงานเสร็จ ให้ปรับค่าตัวแปรตามที่กำหนด</p>
                                <p className={"my-1"}>4. กลับไปตรวจสอบเงื่อนไขอีกครั้ง</p>
                                <p className={"my-1"}>5. ทำซ้ำจนกว่าเงื่อนไขจะเป็นเท็จ</p>
                            </div>
                        </div>
                        <div className={""}>
                            <Code className={"w-full"}>
                                <div className={"flex flex-col"}>
                                    <div className={"flex"}>
                                        <p className={"mr-2 text-red-400"}>{"for"}</p>
                                        <p>{"("}</p>
                                        <p className={"text-cyan-500"}>initialization</p>
                                        <p>{";"}</p>
                                        <p className={"text-cyan-500"}>condition</p>
                                        <p>{";"}</p>
                                        <p className={"text-cyan-500"}>iteration</p>
                                        <p>{";)"}</p>
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
                            <div className={"flex mt-2"}>
                                    <Image src="/for_flowchart.png" isBlurred={true} height={200} />
                            </div>
                        </div>
    
                    </CardBody>
                </Card>
                <Card className={"h-[630px]"}>
                    <CardHeader>
                        <h1 className={"text-lg font-bold"}>5. โครงสร้างแบบทำซ้ำ (while loop)</h1>
                    </CardHeader>
                    <CardBody className={"flex flex-col justify-evenly"}>
                        <Listbox className={""}>
                            <ListboxItem>
                                <p className={"text-md"}>ใช้เมื่อต้องการให้ทำซ้ำ ตามเงื่อนไข ที่กำหนด โดยไม่รู้จำนวนรอบที่แน่นอน</p>
                            </ListboxItem>
                            <ListboxItem>
                                <p>
                                    ถ้าเงื่อนไขเป็น จริง (True) จะทำซ้ำไปเรื่อย ๆ จนกว่าเงื่อนไขจะเป็น เท็จ (False)
                                </p>
                            </ListboxItem>
                        </Listbox>
                        <div>
                            <div className={"flex my-2"}>
                                <ScrollText/>
                                <h1 className={"font-bold ml-2 text-lg"}>หลักการทำงาน</h1>
                            </div>
                            <div className={"ml-4 my-2"}>
                                <p className={"my-1"}>1. ตรวจสอบเงื่อนไขก่อนเข้าไปทำงาน</p>
                                <p className={"my-1"}>2. ถ้าเงื่อนไขเป็นจริง ให้ทำคำสั่งในลูป</p>
                                <p className={"my-1"}>3. กลับไปตรวจสอบเงื่อนไขอีกครั้ง</p>
                                <p className={"my-1"}>4. ทำซ้ำจนกว่าเงื่อนไขจะเป็นเท็จ</p>
                            </div>
                        </div>
                        <div className={""}>
                            <Code className={"w-full"}>
                                <div className={"flex flex-col"}>
                                    <div className={"flex"}>
                                        <p className={"mr-2 text-red-400"}>{"while"}</p>
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
                                    </div>
                                </div>
    
                            </Code>
                            <div className={"flex"}>
                                <div className={"flex mx-2"}>
                                    <Image src="/while_flowchart.png" isBlurred={true} height={200}/>
                                </div>
                            </div>
                        </div>
    
    
                    </CardBody>
                </Card>
                <Card className={"h-[630px]"}>
                    <CardHeader>
                        <h1 className={"text-lg font-bold"}>6. โครงสร้างแบบทำซ้ำ (do-while loop)</h1>
                    </CardHeader>
                    <CardBody className={"flex flex-col justify-evenly"}>
                        <Listbox className={""}>
                            <ListboxItem>
                                <p >คล้ายกับ while loop แต่ จะทำงานอย่างน้อยหนึ่งครั้งก่อน แล้วจึงตรวจสอบเงื่อนไข</p>
                            </ListboxItem>
                            <ListboxItem>
                                <p>
                                    ใช้เมื่อ ต้องการให้คำสั่งทำงานอย่างน้อยหนึ่งรอบ ก่อนพิจารณาเงื่อนไข
                                </p>
                            </ListboxItem>
                        </Listbox>
                        <div>
                            <div className={"flex my-2"}>
                                <ScrollText/>
                                <h1 className={"font-bold ml-2 text-lg"}>หลักการทำงาน</h1>
                            </div>
                            <div className={"ml-4 my-2"}>
                                <p className={"my-1"}>1. ทำคำสั่งในลูปก่อน หนึ่งรอบ</p>
                                <p className={"my-1"}>2. ตรวจสอบเงื่อนไข</p>
                                <p className={"my-1"}>3. ถ้าเงื่อนไขเป็นจริง ให้ทำซ้ำ</p>
                                <p className={"my-1"}>3. ถ้าเงื่อนไขเป็นเท็จ หยุดทำงาน</p>
                            </div>
                        </div>
                        <div className={"flex"}>
                            <Code className={"h-full"}>
                                <div className={"flex flex-col"}>
                                    <div className={"flex"}>
                                        <p className={"mr-2 text-red-400"}>{"do"}</p>
                                        <p className={"ml-2 "}>{"{"}</p>
                                    </div>
                                    <div className={"flex"}>
                                        <p className={"text-default-500 ml-5"}>
                                            {"// ..."}
                                        </p>
                                    </div>
                                    <div className={"flex"}>
                                        <p>{"}"}</p>
                                        <p className={"text-red-400 ml-2"}>{"while"}</p>
                                        <p>{"("}</p>
                                        <p className={"text-cyan-500"}>statement</p>
                                        <p>{")"}</p>
                                        <p >{";"}</p>
                                    </div>
                                </div>
    
                            </Code>
                            <div className={"flex"}>
                                <div className={"flex mx-2"}>
                                    <Image src="/dowhile_flowchart.png" isBlurred={true} height={200}/>
                                </div>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </section>
    )
}