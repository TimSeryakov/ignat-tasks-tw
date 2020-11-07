import React, {useState} from "react";
import {CustomButton} from "../common/CustomButton/CustomButton";
import {homeWorkReducer} from "../bll/homeWorkReducer";

const initialPeople = [
    {_id: 0, name: "Кот", age: 3},
    {_id: 1, name: "Александр", age: 66},
    {_id: 2, name: "Коля", age: 16},
    {_id: 3, name: "Виктор", age: 44},
    {_id: 4, name: "Дмитрий", age: 40},
    {_id: 5, name: "Ирина", age: 55},
] as Array<PeopleType>

export type PeoplesStateType = typeof initialPeople

export type PeopleType = {
  _id: number
  name: string
  age: number
}

function HW8() {
    const [people, setPeople] = useState(initialPeople);

    const finalPeople = people.map(p => (
        <div key={p._id}>
            <span className={"font-bold"}>{p.name}</span> <span>Возраст: {p.age}</span>
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: "SORT", payload: "alphabetically"}))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: "SORT", payload: "reverseAlphabetically"}))
    const check18 = () => setPeople(homeWorkReducer(initialPeople, {type: "CHECK", payload: 18}))

    return (
        <div className="py-5 text-center">
          <h1 className="p-10 text-3xl text-gray-700 lowercase font-major">homework 8</h1>


            {finalPeople}
            <div className={"mt-10"}>
               <CustomButton onClick={sortUp} color={"blue"}>sort up</CustomButton>
               <CustomButton onClick={sortDown} color={"green"}>sort down</CustomButton>
               <CustomButton onClick={check18} color={"red"}>check 18</CustomButton>
            </div>

        </div>
    );
}

export default HW8
