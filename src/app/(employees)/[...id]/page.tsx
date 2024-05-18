import InputForm from "@/components/custom/InputForm";

interface props{
    params: {
        id: number
    }
}

export default function EmployeePage({ params }: props){
    return (
        <div className={"w-full"}>
            <h1>{params.id}</h1>
            <InputForm employeeId={params.id}/>
        </div>
    )

}