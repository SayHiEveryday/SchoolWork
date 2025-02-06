import {Image, Link} from "@heroui/react";

export default function () {
    return (
        <section className={"flex justify-center items-center min-h-svh m-0 w-full"}>
            <div>
                <div className={"font-bold text-3xl text-center"}>
                    <p>
                        ด.ช. ปิยภูมิ นุชนิยม ม.3/3 เลขที่ 35
                    </p>
                </div>
                <div className={"flex flex-row-reverse my-4"}>
                    <Image src={"/qrcode.png"} width={200}/>
                    <div className={"flex flex-col mx-4 text-end text-xl"}>
                        <p>
                            ทั้งหมดนี่เขียนใน html css สามารถดู source code ได้ที่
                        </p>
                        <Link>
                            <p className={"text-xl text-end"}>
                                https://github.com/SayHiEveryday/SchoolWork
                            </p>
                        </Link>
                        <p>
                            หรือเเสกน
                        </p>
                    </div>
                </div>
            </div>



        </section>
    )
}