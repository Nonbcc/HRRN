Member
นางสาวเกสพิชญ์ ศรีบูรพา 419
นายคณานนท์ ก้ามจำรูญ 420
นางสาวจุฬาลักษณ์ ป้องศรี 421
นายโชตินรินทร์ พิสิฐพัฒิกุล 423
นางสาวปาลิตา สิมะบวรสุทธิ์ 427

ขั้นตอนการใช้งาน website HRRN
1.run file HRRN ใน browser
-- Input --
2.เลือก algorithm (non-preemtive / preemtive)
    2.1.Non-preemtive
    -ใส่ arrival times ของแต่ละ process (e.g.0 2 4 6 8)
    -ใส่ burst time ของแต่ละ process (e.g.2 4 6 10) 

    2.2.Preemtive
    -ใส่ arrival times ของแต่ละ process (e.g.0 2 4 6 8)
    -ใส่ burst time ของแต่ละ process (e.g.2 4 6 10)
    -กำหนด time quantum ของ processor (e.g.3)
3.กดปุ่ม submit

-- Output --
-มี grant chart แสดงช่วงเวลาต่างๆที่แต่ละ process เริ่มทำงานจนจบการทำงานของทุก process
-มี table ที่แสดง arrival time, burst time, complete time, turn around time และ waiting time ของแต่ละ process
-มีค่า average ของ turn around time และ waiting time ของทุก process

** หมายเหตุ **
-หลังจากกดปุ่ม submit แล้วต้องการที่จะใส่ข้อมูลใหม่ให้ทำการ reload หน้าใหม่อีกครั้งนึงแล้วจึงใส่ข้อมูลใหม่ได้