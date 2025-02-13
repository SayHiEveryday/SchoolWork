import {Avatar, Card, CardBody, CardHeader, Chip} from "@heroui/react";
import {Cake, Tags} from "lucide-react";

function App() {

    return (
        <section className={"max-h-svh h-full container mx-auto max-w-9xl px-2 py-6"}>
            <div className={"flex h-36 justify-between"}>                                   
                <div className={"flex"}>
                    <Avatar className={"h-36 w-36 "} src={"./1200x1200bf-60.jpg"}/>
                    <div className={"flex flex-col mx-4 my-2"}>
                        <h1 className={"font-bold text-3xl"}>
                            ก๊อต จักรพรรณ์ อาบครบุรี
                        </h1>
                        <Chip size={"lg"} className={"my-2"} color={"primary"} variant={"shadow"} startContent={<Cake/>}>
                            13 กันยายน พ.ศ. 2511
                        </Chip>
                        <Chip size={"lg"} className={"my-2"} color={"warning"} variant={"shadow"} startContent={<Tags/>}>
                            เจ้าชายลูกทุ่ง
                        </Chip>
                    </div>
                </div>
                <div className={"max-w-3xl h-full "}>
                    <Card className={"h-full"}>
                        <CardHeader>
                            <h1 className={"font-bold text-xl"}>
                                ประวัติเเละความเป็นมา
                            </h1>
                        </CardHeader>
                        <CardBody>
                            ก๊อท จักรพันธ์ ครบุรีธีรโชติ (ชื่อเดิม: จักรพรรณ์ อาบครบุรี) เกิดที่อำเภอครบุรี
                            จังหวัดนครราชสีมา เป็นบุตรคนที่ 3 จากทั้งหมด 4 คน
                            บิดาเป็นทหารชาวอเมริกันที่มาประจำการในประเทศไทย ส่วนมารดาเป็นชาวอำเภอครบุรี
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className={"grid grid-cols-2 gap-4 mt-4"}>
                <div>
                    <Card>
                        <CardHeader>
                            <h1 className={"font-bold text-2xl"}>
                                ความสำคัญในวงการเพลงลูกทุ่งไทย
                            </h1>
                        </CardHeader>
                        <CardBody>
                            <div className="flex flex-col">
                                <div className="flex flex-wrap items-center gap-1">
                                    <p>ก๊อต จักรพรรณ์ อาบครบุรี ได้รับฉายาว่า</p>
                                    <p className="font-bold">"เจ้าชายลูกทุ่ง"</p>
                                    <p>
                                        เนื่องจากเสียงร้องที่นุ่มนวล มีเสน่ห์
                                    </p>
                                    <p>
                                        และเป็นเอกลักษณ์เฉพาะตัว
                                        ทำให้เพลงของเขาได้รับความนิยมอย่างกว้างขวาง
                                        เขาสามารถถ่ายทอดอารมณ์ของบทเพลงได้อย่างลึกซึ้ง ไม่ว่าจะเป็นเพลงรักหวานซึ้ง
                                        เพลงเศร้ากินใจ หรือเพลงจังหวะสนุกสนาน
                                        จนกลายเป็นศิลปินที่ได้รับการยอมรับในวงกว้าง
                                    </p>
                                </div>
                                <div className={"flex flex-wrap items-center gap-1"}>
                                    <p>
                                        นอกเหนือจากความสามารถด้านการร้องเพลง ก๊อต จักรพรรณ์ ยังมีบทบาทสำคัญในการ
                                    </p>
                                    <p className={"font-bold"}>
                                        ยกระดับเพลงลูกทุ่งไทย
                                    </p>
                                    <p>
                                        ให้เข้าถึงกลุ่มผู้ฟังที่กว้างขึ้น โดยเฉพาะการนำเสนอเพลงลูกทุ่ง
                                    </p>
                                    <p>
                                        ในรูปแบบที่ร่วมสมัย
                                        ผ่านการผสมผสานแนวเพลงและสไตล์การร้องที่ทันสมัยมากขึ้น
                                        ทำให้เพลงลูกทุ่งไม่ได้จำกัดอยู่แค่ผู้ฟังรุ่นเก่า
                                        แต่สามารถครองใจคนรุ่นใหม่ได้อีกด้วย
                                    </p>
                                </div>
                                <p>
                                    อีกหนึ่งบทบาทที่สำคัญของเขาคือการ ผลักดันศิลปินลูกทุ่งรุ่นใหม่ ผ่านโปรเจกต์ "New
                                    Country"
                                    ซึ่งเป็นโครงการที่เปิดโอกาสให้ศิลปินหน้าใหม่ได้แจ้งเกิดในวงการเพลงลูกทุ่ง
                                    โดยโปรเจกต์นี้ช่วยให้ศิลปินรุ่นใหม่มีพื้นที่ในการแสดงความสามารถ ทั้งการร้องเพลง
                                    การแสดง
                                    และการพัฒนาแนวเพลงให้เข้ากับยุคสมัย
                                    นับว่าเป็นการสร้างสีสันและความหลากหลายให้กับวงการเพลงลูกทุ่งไทย

                                    ด้วยความสามารถและความตั้งใจของก๊อต จักรพรรณ์ ทำให้เขากลายเป็นบุคคลสำคัญที่ช่วย
                                    รักษาและพัฒนาวงการเพลงลูกทุ่งไทย ให้คงอยู่และเติบโตอย่างต่อเนื่อง
                                    ไม่เพียงแต่เป็นศิลปินที่ประสบความสำเร็จเท่านั้น
                                    แต่ยังเป็นแบบอย่างให้กับนักร้องรุ่นใหม่ที่ต้องการสืบสานศิลปะการร้องเพลงลูกทุ่งไทยอีกด้วย
                                </p>
                            </div>
                        </CardBody>
                    </Card>
                </div>
                <div className={"grid grid-row-2 gap-4"}>
                    <div className={"grid grid-cols-2 gap-4"}>
                        <Card>
                            <CardHeader>
                                <h1 className={"font-bold text-xl"}>
                                    อัลบั้มชุด "หัวแก้วหัวแหวน"
                                </h1>
                            </CardHeader>
                            <CardBody>
                                <p>
                                    อัลบั้ม "หัวแก้วหัวแหวน" มีหลายชุด และเป็นหนึ่งในผลงานที่สร้างชื่อเสียงให้กับก๊อตเป็นอย่างมาก โดยเป็นการนำเพลงลูกทุ่งเก่ามาขับร้องใหม่ในสไตล์ของเขาเอง
                                </p>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardHeader>
                                <h1 className={"font-bold text-xl"}>
                                    โปรเจกต์ "New Country"
                                </h1>
                            </CardHeader>
                            <CardBody>
                                <p>
                                    เป็นโปรเจกต์ที่ก๊อตสร้างขึ้นหลังจากออกจาก GMM Grammy โดยมีเป้าหมายในการผลักดันศิลปินลูกทุ่งรุ่นใหม่
                                </p>
                            </CardBody>
                        </Card>
                    </div>
                    <div className={"grid grid-cols-2 gap-4"}>
                        <Card>
                            <CardHeader>
                                <h1 className={"font-bold text-xl"}>
                                    เพลง "ขอโทษที่คิดถึง"
                                </h1>
                            </CardHeader>
                            <CardBody>
                                <p>
                                    เพลงนี้เป็นหนึ่งในเพลงที่ได้รับความนิยมมากที่สุดของก๊อต ด้วยเนื้อหาที่ซึ้งกินใจเกี่ยวกับความคิดถึงคนรักที่จากไป เพลงนี้ช่วยสร้างฐานแฟนคลับให้กับก๊อตเป็นจำนวนมาก                                </p>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardHeader>
                                <h1 className={"font-bold text-xl"}>
                                    อัลบั้ม "Got Show"
                                </h1>
                            </CardHeader>
                            <CardBody>
                                <p>
                                    เป็นอัลบั้มที่รวมเอาการแสดงสดจากคอนเสิร์ตของก๊อต ซึ่งเต็มไปด้วยการแสดงที่อลังการ และแสดงให้เห็นถึงความสามารถของเขาในด้านการร้องเพลงและเอนเตอร์เทนคนดู
                                </p>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
            <div className={"mt-4"}>
                <Card>
                    <CardHeader>
                        <h1 className={"font-bold text-2xl"}>
                            สรุป
                        </h1>
                    </CardHeader>
                    <CardBody>
                        ก๊อต จักรพรรณ์ เป็นบุคคลสำคัญในวงการเพลงลูกทุ่งไทยที่ช่วยยกระดับเพลงลูกทุ่งให้เข้าถึงคนรุ่นใหม่ พร้อมทั้งผลักดันศิลปินหน้าใหม่เข้าสู่วงการ ผลงานเด่นของเขา เช่น "หัวแก้วหัวแหวน", "ขอโทษที่คิดถึง", โปรเจกต์ New Country, และ คอนเสิร์ต Got Show ถือเป็นสิ่งที่ช่วยให้เขาเป็นตำนานในวงการลูกทุ่งไทย
                    </CardBody>
                </Card>
            </div>
        </section>
    );
}

export default App
