import {BreadcrumbItem, Breadcrumbs, Card, CardBody, Divider} from "@heroui/react";

export default function () {
    return (
        <section className="max-h-svh h-full container mx-auto max-w-7xl px-6 flex-grow my-12">
            <h1 className={"font-bold text-4xl text-center"}>
                การเขียนโปรแกรม (Programming)
            </h1>
            <p className={"my-4 text-center text-2xl font-bold"}>
                กระบวนการเขียนโปรแกรม
            </p>
            <div className={"w-full flex justify-center"}>
                <Breadcrumbs>
                    <BreadcrumbItem>
                        <p className={"text-xl mr-14"}>วิเคราะห์ปัญหา</p>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <p className={"text-xl mx-16"}>ออกแบบโครงสร้างโปรแกรม</p>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <p className={"text-xl mx-16"}>การเขียนโค้ด</p>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <p className={"text-xl ml-12"}>การทดสอบและแก้ไขข้อผิดพลาด</p>
                    </BreadcrumbItem>
                </Breadcrumbs>
            </div>
            <div className={"grid grid-cols-4 mt-4"}>
                <Card className={"max-w-72"}>
                    <CardBody>
                        <div>
                            <p className={"font-bold"}>เป้าหมาย:</p>
                            ทำความเข้าใจว่าปัญหาคืออะไร และต้องการให้ซอฟต์แวร์ทำอะไรบ้าง
                        </div>
                        <div>
                            <p className={"font-bold"}>รายละเอียด:</p>
                            <Divider className="my-2" />
                            <p>กำหนด เป้าหมายหลักของโปรแกรม เช่น
                                โปรแกรมจะช่วยให้ผู้ใช้ทำอะไรได้ง่ายขึ้น</p>
                            <Divider className="my-2" />
                            <p>ระบุ ความต้องการของผู้ใช้ (User Requirements)
                                โดยใช้การสัมภาษณ์หรือแบบสอบถาม</p>
                            <Divider className="my-2" />
                            <p>วิเคราะห์ ข้อจำกัด (Constraints) เช่น ทรัพยากรที่ใช้ได้ เวลาในการพัฒนา
                                งบประมาณ</p>
                            <Divider className="my-2" />
                            <p>ตรวจสอบ ข้อมูลนำเข้า (Input) และผลลัพธ์ที่ต้องการ (Output)</p>
                        </div>
                    </CardBody>
                </Card>
                <Card className={"max-w-72 max-h-[500px]"}>
                    <CardBody>
                        <div>
                            <p className={"font-bold"}>เป้าหมาย:</p>
                            กำหนดโครงสร้างของซอฟต์แวร์ เพื่อให้สามารถพัฒนาและเข้าใจโค้ดได้ง่ายขึ้น
                        </div>
                        <div>
                            <p className={"font-bold"}>รายละเอียด:</p>
                            <Divider className="my-1" />
                            <p>ออกแบบ สถาปัตยกรรมของระบบ (System Architecture) เช่น ใช้ Client-Server หรือ Microservices</p>
                            <Divider className="my-1" />
                            <p>ออกแบบ Flowchart และ UML Diagram เพื่อแสดงลำดับขั้นตอนของโปรแกรม</p>
                            <Divider className="my-1" />
                            <p>กำหนด โครงสร้างข้อมูล (Data Structure) และ ฐานข้อมูล (Database Design)</p>
                            <Divider className="my-1" />
                            <p>วางแผน User Interface (UI Design) เพื่อให้ผู้ใช้สามารถโต้ตอบกับโปรแกรมได้ง่าย</p>
                        </div>
                    </CardBody>
                </Card>
                <Card className={"max-w-72"}>
                    <CardBody>
                        <div>
                            <p className={"font-bold"}>เป้าหมาย:</p>
                            นำการออกแบบมาแปลงเป็นโค้ดโปรแกรมที่สามารถทำงานได้จริง
                        </div>
                        <div>
                            <p className={"font-bold"}>รายละเอียด:</p>
                            <Divider className="my-3.5" />
                            <p>เลือก ภาษาโปรแกรม ที่เหมาะสม</p>
                            <p>เข่น Python สำหรับ Data Science</p>
                            <Divider className="my-3.5" />
                            <p>ใช้หลักการ Clean Code เพื่อให้โค้ดอ่านง่ายและดูแลรักษาได้ง่าย</p>
                            <Divider className="my-3.5" />
                            <p>แบ่งโค้ดออกเป็น โมดูล (Modules) หรือ ฟังก์ชัน (Functions) เพื่อลดความซับซ้อน</p>
                            <Divider className="my-3.5" />
                            <p>ใช้ Version Control (Git/GitHub) เพื่อบริหารจัดการโค้ด</p>
                        </div>
                    </CardBody>
                </Card>
                <Card className={"max-w-72"}>
                    <CardBody>
                        <div>
                            <p className={"font-bold"}>เป้าหมาย:</p>
                            ตรวจสอบว่าโปรแกรมทำงานได้ถูกต้องและไม่มีข้อผิดพลาด
                        </div>
                        <div>
                            <p className={"font-bold"}>ประเภทของการทดสอบ:</p>
                            <Divider className="my-1.5" />
                            <p>Unit Testing: ทดสอบแต่ละฟังก์ชันแยกกัน</p>
                            <Divider className="my-1.5" />
                            <p>Integration Testing: ตรวจสอบว่าฟังก์ชันทำงานร่วมกันได้ดี</p>
                            <Divider className="my-1.5" />
                            <p>System Testing: ทดสอบระบบทั้งหมดจากมุมมองของผู้ใช้</p>
                            <Divider className="my-1.5" />
                            <p>Security Testing: ตรวจสอบช่องโหว่ด้านความปลอดภัย</p>
                            <Divider className="my-1.5" />
                            <p>Performance Testing: ตรวจสอบความเร็วและประสิทธิภาพของโปรแกรม</p>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </section>
    )
}