import {
    Card,
    CardBody,
    CardHeader,
    Listbox,
    ListboxItem,
    Image,
    Table,
    TableHeader,
    TableColumn,
    TableBody, TableRow, TableCell
} from "@heroui/react";
import {
    CircleArrowRight,
    MoveRight,
    StepForward,
} from "lucide-react";
import Signature from "./Signature.tsx";

export default function SecondSection() {
    return (
        <section className="max-h-svh h-full container mx-auto max-w-7xl px-6 flex-grow my-12">
            <h1 className={"font-bold text-4xl text-center"}>
                การเขียนผังงานโปรแกรม (Flowchart)
            </h1>
            <p className={"text-center my-4"}>
                ผังงานโปรแกรม (Flowchart) คือ แผนภาพที่ใช้สัญลักษณ์เพื่อแสดงลำดับขั้นตอนของกระบวนการในโปรแกรม ตั้งแต่เริ่มต้นจนจบ ช่วยให้เข้าใจโครงสร้างของโปรแกรมได้ง่ายขึ้น
            </p>
            <div className={"flex justify-start "}>
                <div className={"flex flex-col w-96"}>
                    <Card>
                        <CardHeader>
                            <h1 className={"font-bold text-xl text-center"}>
                                ประโยชน์ของผังงานโปรแกรม
                            </h1>
                        </CardHeader>
                        <CardBody>
                            <Listbox>
                                <ListboxItem startContent={"1."}>
                                <p>
                                        ช่วยให้เห็นโครงสร้างของโปรแกรมได้ชัดเจน
                                    </p>
                                </ListboxItem>
                                <ListboxItem startContent={"2."}>
                                    <p>
                                        ลดข้อผิดพลาดก่อนเริ่มเขียนโค้ดจริง
                                    </p>
                                </ListboxItem>
                                <ListboxItem startContent={"3."}>
                                    <p>
                                        ทำให้การสื่อสารกับทีมพัฒนาเข้าใจตรงกัน
                                    </p>
                                </ListboxItem>
                                <ListboxItem startContent={"4."}>
                                    <p>
                                        ใช้เป็นเอกสารประกอบสำหรับการบำรุงรักษาโปรแกรม
                                    </p>
                                </ListboxItem>
                            </Listbox>
                        </CardBody>
                    </Card>
                    <Card className={"my-2"}>
                        <CardHeader className={"font-bold text-xl text-center"}>
                            <h1>
                                ที่มาของ Flowchart
                            </h1>
                        </CardHeader>
                        <CardBody>
                            <Listbox>
                                <ListboxItem className={""} startContent={<CircleArrowRight />}>
                                    <p >
                                        Flowchart ถูกพัฒนาขึ้นในปี 1920 โดย Frank Gilbreth เพื่อใช้ในกระบวนการทางอุตสาหกรรม
                                    </p>
                                </ListboxItem>
                                <ListboxItem className={"my-1"} startContent={<StepForward />}>
                                    <p>
                                        ต่อมาได้รับการปรับปรุงและใช้อย่างแพร่หลายในด้านวิศวกรรม, การเขียนโปรแกรม, และการจัดการกระบวนการทางธุรกิจ
                                    </p>
                                </ListboxItem>
                            </Listbox>
                        </CardBody>
                    </Card>
                </div>
                <div className={"mx-2"}>
                    <Card>
                        <CardHeader>
                            <h1 className={"font-bold"}>
                                ตัวอย่าง flowchart
                            </h1>
                        </CardHeader>
                        <CardBody>
                            <Image src={"/flowchart.png"} width={250}/>
                        </CardBody>
                    </Card>
                </div>
                <div className={"w-[555px]"}>
                    <Table>
                        <TableHeader>
                            <TableColumn>ชื่อ</TableColumn>
                            <TableColumn>สัญลักษณ์</TableColumn>
                            <TableColumn>ความหมาย</TableColumn>
                        </TableHeader>
                        <TableBody>
                            <TableRow key={1}>
                                <TableCell>Terminator</TableCell>
                                <TableCell>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="#fff"
                                         fill-rule="evenodd" stroke="#000" stroke-linecap="round"
                                         stroke-linejoin="round">
                                        <path
                                            d="M54.5 24.5h-45C5.345 24.5 2 27.845 2 32s3.345 7.5 7.5 7.5h45c4.155 0 7.5-3.345 7.5-7.5s-3.345-7.5-7.5-7.5z"
                                            stroke="#838383" fill="#efc"/>
                                    </svg>
                                </TableCell>
                                <TableCell>ใช้แทนจุดเริ่มต้นและจุดสิ้นสุดของกระบวนการ</TableCell>
                            </TableRow>
                            <TableRow key={2}>
                                <TableCell>Process</TableCell>
                                <TableCell>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="#fff"
                                         fill-rule="evenodd" stroke="#000" stroke-linecap="round"
                                         stroke-linejoin="round">
                                        <path fill="#cff" stroke="#838383" d="M1.5 21.5h60v21h-60z"/>
                                    </svg>
                                </TableCell>
                                <TableCell>ใช้แทนขั้นตอนหรือการดำเนินการ</TableCell>
                            </TableRow>
                            <TableRow key={3}>
                                <TableCell>Decision</TableCell>
                                <TableCell>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="#fff"
                                         fill-rule="evenodd" stroke="#000" stroke-linecap="round"
                                         stroke-linejoin="round">
                                        <path d="M32.5 15.5l-30 17 30 17 30-17z" fill="#fec" stroke="#838383"/>
                                    </svg>
                                </TableCell>
                                <TableCell>ใช้แทนการตัดสินใจหรือเงื่อนไข (มักมีคำถามใช่/ไม่ใช่)</TableCell>
                            </TableRow>
                            <TableRow key={4}>
                            <TableCell>Input/Output</TableCell>
                                <TableCell>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="#fff"
                                         fill-rule="evenodd" stroke="#000" stroke-linecap="round"
                                         stroke-linejoin="round">
                                        <path d="M1.5 46.5l8-30h52l-8 30z" fill="#cdf" stroke="#838383"/>
                                    </svg>
                                </TableCell>
                                <TableCell>ใช้แทนการรับข้อมูลหรือแสดงผลลัพธ์</TableCell>
                            </TableRow>
                            <TableRow key={5}>
                                <TableCell>Arrow</TableCell>
                                <TableCell><MoveRight size={25} className={"mx-3"}/></TableCell>
                                <TableCell>ใช้แทนทิศทางการไหลของกระบวนการ</TableCell>
                            </TableRow>
                            <TableRow key={6}>
                                <TableCell>Connector</TableCell>
                                <TableCell>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="#fff"
                                         fill-rule="evenodd" stroke="#000" stroke-linecap="round"
                                         stroke-linejoin="round">
                                        <circle cx="31.5" cy="31.5" fill="#ccffd5" stroke="#838383" r="12"/>
                                    </svg>
                                </TableCell>
                                <TableCell> ใช้แทนการเชื่อมต่อระหว่างส่วนต่าง ๆ ของ Flowchart</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </div>
            <Signature />
        </section>
    )
    
}