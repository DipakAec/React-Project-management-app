import Input from "./Input.jsx";


export default function NewProject() {
  return <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li><button className="px-2 py-2 w-15 rounded-md bg-red-400 text-stone-900 hover:bg-red-600 hover:text-stone-100">Cancle</button></li>
                <li><button className="px-2 py-2 w-15 rounded-md bg-emerald-400 text-stone-900 hover:bg-emerald-600 hover:text-stone-100">Save</button></li>
            </menu>
            <div>
                <Input label="Title"/>
                <Input label="Description" textarea />
                <Input label="Due Date"/>
            </div>
        </div>
  
}

