import {Card, CardBody, CardHeader} from "@heroui/react";
import Signature from "./Signature.tsx";

export default function () {
    return (
        <section className="max-h-svh h-full my-4 container mx-auto max-w-7xl px-6 flex-grow">
            <div className={"grid grid-cols-3 gap-3"}>
                <Card>
                    <CardHeader>
                        <div>
                            <h1 className={"font-bold text-xl"}>
                                การทดสอบและแก้ไขโปรแกรม
                            </h1>
                            <h1 className={"text-default-500"}>
                                (Testing & Debugging)
                            </h1>
                        </div>
                    </CardHeader>
                    <CardBody>
                        <h1 className={"font-bold"}>
                            1. การทดสอบโปรแกรม (Software Testing)
                        </h1>
                        <p className={"text-md mt-1"}>
                            การทดสอบเป็นขั้นตอนสำคัญในการพัฒนาโปรแกรม
                            เพื่อให้มั่นใจว่าโปรแกรมทำงานถูกต้องและไม่มีข้อผิดพลาดที่อาจส่งผลกระทบต่อผู้ใช้
                        </p>
                        <div className={"ml-4 my-2"}>
                            <p>
                                1.1 ประเภทของการทดสอบโปรแกรม
                            </p>
                            <div className={"ml-4 mt-1"}>
                                <p>
                                    Unit Testing (การทดสอบหน่วยย่อย)
                                </p>
                                <p className={"mt-2"}>
                                    Integration Testing (การทดสอบการรวมระบบ)
                                </p>
                                <p>
                                    System Testing (การทดสอบระบบ)
                                </p>
                                <p className={"mt-2"}>
                                    Acceptance Testing (การทดสอบยอมรับโดยผู้ใช้)
                                </p>
                            </div>
                        </div>
                        
                        <h1 className={"font-bold"}>
                            2. การแก้ไขข้อผิดพลาด (Debugging)
                        </h1>
                        <p className={"ml-4"}>Debugging เป็นกระบวนการหาสาเหตุของข้อผิดพลาดและแก้ไขเพื่อให้โปรแกรมทำงานได้ถูกต้อง</p>
                        <div className={"my-2 ml-4"}>
                            <p>2.1 ประเภทของข้อผิดพลาด (Types of Errors)</p>
                            <div className={"ml-4 mt-2"}>
                                <p className={"my-2"}>Syntax Error (ข้อผิดพลาดทางไวยากรณ์)
                                    เกิดจากการเขียนโค้ดผิด เช่น ใช้เครื่องหมายผิดพลาด หรือพิมพ์ผิด</p>
                                <p className={"my-2"}>Runtime Error (ข้อผิดพลาดขณะรันโปรแกรม)
                                เกิดขึ้นขณะโปรแกรมกำลังทำงาน เช่น การหารด้วยศูนย์ การเข้าถึงไฟล์ที่ไม่มีอยู่จริง</p>
                            </div>
                        </div>

                    </CardBody>
                </Card>
                <Card>
                    <CardHeader>
                        <div>
                        <h1 className={"font-bold text-xl"}>
                                การจัดทำเอกสารและการบำรุงรักษาโปรแกรม
                            </h1>
                            <h1 className={"text-default-500"}>
                                (Documentation & Maintenance)
                            </h1>
                        </div>
                    </CardHeader>
                    <CardBody>
                        <h1 className={"font-bold"}>
                            1. ประเภทของเอกสาร
                        </h1>
                        <p className={"text-md mt-1"}>
                            เอกสารประกอบโปรแกรมช่วยให้ผู้ใช้ นักพัฒนา หรือทีมอื่น ๆ เข้าใจการทำงานของระบบและสามารถดูแลหรือพัฒนาต่อได้ง่ายขึ้น
                        </p>
                        <div className={"ml-4 my-2"}>
                            <p>
                                1.1 เอกสารสำหรับนักพัฒนา (Developer Documentation)
                            </p>
                            <p className={"mt-2"}>
                                1.2 เอกสารสำหรับผู้ใช้ (User Documentation)
                            </p>
                            <p className={"mt-2"}>
                                1.3 อกสารการออกแบบระบบ (System Documentation)
                            </p>
                        </div>

                        <h1 className={"font-bold"}>
                            2. การบำรุงรักษาโปรแกรม (Software Maintenance)
                        </h1>
                        <p className={"ml-4"}>การบำรุงรักษาโปรแกรมเป็นกระบวนการปรับปรุงหรือแก้ไขซอฟต์แวร์หลังจากที่เปิดใช้งาน</p>
                        <div className={"my-2 ml-4"}>
                            <p>2.1 ประเภทของการบำรุงรักษา</p>
                            <div className={"ml-4 mt-2"}>
                                <p className={"my-2"}>Adaptive Maintenance (การปรับปรุงให้รองรับการเปลี่ยนแปลง)</p>
                                <p className={"my-2"}>Corrective Maintenance (การแก้ไขข้อผิดพลาด)</p>
                                <p className={"my-2"}>Preventive Maintenance (การป้องกันปัญหาล่วงหน้า)</p>
                            </div>
                        </div>
                    </CardBody>
                </Card>
                <Card>
                    <CardHeader>
                        <div>
                            <h1 className={"font-bold text-xl"}>
                                โครงสร้างพื้นฐานที่ใช้ในการเขียนโปรแกรม
                            </h1>
                            <h1 className={"text-default-500"}>
                                (Basic Programming Structures)
                            </h1>
                        </div>
                    </CardHeader>
                    <CardBody>
                        <h1 className={"font-bold"}>
                            1. โครงสร้างแบบเรียงลำดับ (Sequence Structure)
                        </h1>
                        <p className={"ml-4 mt-1 "}>
                            การทำงานของโปรแกรมเป็นลำดับจากบนลงล่าง ไม่มีการกระโดดข้าม
                        </p>
                        <h1 className={"font-bold my-2"}>
                            2. โครงสร้างแบบมีทางเลือก (Decision Structure)
                        </h1>
                        <div className={"my-4 ml-2"}>
                            <p className={"my-2"}>ใช้สำหรับ การตัดสินใจ โดยมีเงื่อนไขกำหนดว่าโปรแกรมจะทำงานแบบใด</p>
                            <p className={"my-2"}>เช่น ถ้าเงื่อนไขเป็นจริงให้ทำงานหนึ่ง ถ้าเป็นเท็จให้ทำงานอีกแบบ</p>
                        </div>
                        <h1 className={"font-bold my-2"}>
                            3. โครงสร้างแบบทำซ้ำ (Repetition Structure)
                        </h1>
                        <div className={"my-2 ml-4"}>
                            <p className={"my-2"}>ใช้ วนซ้ำ คำสั่งจนกว่าเงื่อนไขจะเป็นเท็จ</p>
                            <p className={"my-2"}>ใช้ลดความซ้ำซ้อนของโค้ด และเพิ่มประสิทธิภาพของโปรแกรม</p>
                        </div>
                    </CardBody>
                </Card>
            </div>
            <Signature/>
        </section>
    )
}