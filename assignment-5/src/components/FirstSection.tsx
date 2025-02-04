import {Card, CardBody, Listbox, ListboxItem} from "@heroui/react";
import {
    ArrowDown01,
    Box, CaseSensitive, Check,
    ChevronsDown,
    ChevronsUp,
    Circle,
    CircleSlash,
    Divide,
    EqualNot, FileText, List, Pause, Repeat,
    Repeat2,
    ShieldX,
    Table,
    Variable
} from "lucide-react";
import Signature from "./Signature.tsx";

export default function FirstSection() {
    return (
        <section className="max-h-svh h-full my-4 container mx-auto max-w-7xl px-6 flex-grow">
            <h1 className={"font-bold text-center text-4xl my-8"}>
                ความรู้พื้นฐานการเขียนโปรแกรม
            </h1>
            <div className={"text-center"}>
                การเขียนโปรแกรม (Programming) เป็นกระบวนการที่ใช้ชุดคำสั่ง (Instructions) เพื่อสั่งให้คอมพิวเตอร์ทำงานตามที่เราต้องการ โดยโปรแกรมเมอร์ต้องมีความเข้าใจในแนวคิดพื้นฐานต่าง ๆ เพื่อให้สามารถพัฒนาโปรแกรมได้อย่างถูกต้องและมีประสิทธิภาพ
            </div>
            <div className={"grid grid-cols-4 mt-4 gap-4"}>
                <Card>  
                    <CardBody>  
                        <p className={"font-bold"}>
                            1. ภาษาคอมพิวเตอร์ (Programming Languages)
                        </p>
                        <p className={"mt-1"}>
                            ภาษาคอมพิวเตอร์เป็นเครื่องมือที่ใช้สื่อสารกับคอมพิวเตอร์ มีหลายประเภท เช่น
                        </p>
                        <Listbox>
                            <ListboxItem startContent={<ChevronsUp /> }>
                                <p>
                                    ภาษาระดับสูง (High-Level Language): อ่านและเข้าใจง่าย เช่น Python, Java, C++
                                </p>
                            </ListboxItem>
                            <ListboxItem startContent={<ChevronsDown /> }>
                                <p>
                                    ภาษาระดับต่ำ (Low-Level Language): ใกล้เคียงกับภาษาของเครื่อง เช่น ภาษาแอสเซมบลี (Assembly)
                                </p>
                            </ListboxItem>
                            <ListboxItem startContent={<Table /> }>
                                <p>
                                    ภาษาเชิงประกาศ (Declarative Language): เน้นบอกว่าต้องการทำอะไร มากกว่าการกำหนดลำดับขั้นตอน เช่น SQL
                                </p>
                            </ListboxItem>
                            <ListboxItem startContent={<Box /> }>
                                <p>
                                    ภาษาเชิงวัตถุ (Object-Oriented Language): ใช้แนวคิดของออบเจ็กต์ เช่น Java, C#
                                </p>
                            </ListboxItem>
                        </Listbox>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <p className={"font-bold"}>
                            2. โครงสร้างพื้นฐานของโปรแกรม (Basic Structure of a Program)
                        </p>
                        <p className={"mt-1"}>
                            โปรแกรมทั่วไปจะมีองค์ประกอบหลัก ๆ ได้แก่
                        </p>
                        <Listbox>
                            <ListboxItem startContent={<Variable />}>
                                <p>
                                    ตัวแปร (Variables): ใช้เก็บข้อมูลที่สามารถเปลี่ยนแปลงค่าได้
                                </p>
                            </ListboxItem>
                            <ListboxItem startContent={<ShieldX />}>
                                <p>
                                    ค่าคงที่ (Constants): เก็บค่าที่ไม่เปลี่ยนแปลง
                                </p>
                            </ListboxItem>
                            <ListboxItem startContent={<Divide />}>
                                <p>
                                    ตัวดำเนินการ (Operators): ใช้คำนวณหรือเปรียบเทียบค่า เช่น บวก ลบ คูณ หาร
                                </p>
                            </ListboxItem>
                            <ListboxItem startContent={<EqualNot />}>
                                <p>
                                    นิพจน์ (Expressions): เป็นการรวมตัวของตัวดำเนินการและตัวแปรเพื่อให้ได้ค่าผลลัพธ์
                                </p>
                            </ListboxItem>
                            <ListboxItem startContent={<Repeat2 />}>
                                <p>
                                    คำสั่งควบคุมการทำงาน (Control Statements): กำหนดการทำงานของโปรแกรม เช่น คำสั่งเงื่อนไขและลูป
                                </p>
                            </ListboxItem>
                        </Listbox>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <p className={"font-bold"}>
                            3. ประเภทของข้อมูล (Data Types)
                        </p>
                        <p className={"mt-1"}>
                            ประเภทของข้อมูลเป็นสิ่งสำคัญที่ต้องกำหนดให้เหมาะสมกับการใช้งาน ตัวอย่างเช่น
                        </p>
                        <Listbox>
                            <ListboxItem startContent={<ArrowDown01 />} description={"ใช้เก็บตัวเลขที่ไม่มีทศนิยม"}>
                                <p>
                                    จำนวนเต็ม (Integer)
                                </p>
                            </ListboxItem>
                            <ListboxItem startContent={<Circle />} description={"ใช้เก็บตัวเลขที่มีทศนิยม"}>
                                <p>
                                    จำนวนจริง (Float/Double)
                                </p>
                            </ListboxItem>
                            <ListboxItem startContent={<CaseSensitive />} description={"ใช้เก็บตัวอักษรหรือข้อความ"}>
                                <p>
                                    ข้อความ (String)
                                </p>
                            </ListboxItem>
                            <ListboxItem startContent={<Check />} description={"ใช้เก็บค่า true หรือ false"}>
                                <p>
                                    ค่าบูลีน (Boolean)
                                </p>
                            </ListboxItem>
                            <ListboxItem startContent={<CircleSlash />} description={"ไม่มีค่า หรือ ไม่คืนค่า"}>
                                <p>
                                    ไม่มี (Void)
                                </p>
                            </ListboxItem>
                            <ListboxItem startContent={<List />}>
                                <p>
                                    โครงสร้างข้อมูลอื่น ๆ: เช่น<br/> อาร์เรย์ (Array), ลิสต์ (List), แมพ (Map)
                                </p>
                            </ListboxItem>
                        </Listbox>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <p className={"font-bold"}>
                            4. การควบคุมการทำงานของโปรแกรม (Control Flow Statements)
                        </p>
                        <p className={"my-1"}>
                            การเขียนโปรแกรมที่ดีต้องสามารถควบคุมการทำงานได้ตามเงื่อนไขต่างๆ
                        </p>
                        <p>
                            ซึ่งทำได้โดยใช้คำสั่งควบคุมการทำงาน ได้แก่
                        </p>
                        <Listbox className={"my-4"}>
                            <ListboxItem startContent={<FileText />}>
                                <p>
                                    คำสั่งเงื่อนไข (Conditional Statements)
                                </p>
                                <p className={"text-default-500 text-xs"}>
                                    ใช้ตรวจสอบเงื่อนไขและเลือกดำเนินการ <br/> เช่น if, switch
                                </p>
                            </ListboxItem>
                            <ListboxItem startContent={<Repeat />}>
                                <p>
                                    คำสั่งวนซ้ำ (Looping Statements)
                                </p>
                                <p className={"text-default-500 text-sm"}>
                                    ใช้ทำงานซ้ำ เช่น for, while
                                </p>
                            </ListboxItem>
                            <ListboxItem startContent={<Pause />}>
                                <p>
                                    คำสั่งควบคุมการไหลของโปรแกรม (Jump Statements)
                                </p>
                                <p className={"text-default-500 text-sm"}>
                                    เช่น break, continue, return
                                </p>
                            </ListboxItem>
                        </Listbox>
                    </CardBody>
                </Card>
            </div>
            <Signature />
        </section>
    )
}