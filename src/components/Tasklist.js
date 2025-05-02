export default function Tasklist({ tasks }){
    return(
        <ul className="space-y-2">
            {tasks.map((task,index) => (
                <li
                    key={index}
                    className="border p-2 rounded"
                >
                    {task}
                </li>
            ))}
        </ul>
    )
}