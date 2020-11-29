import React from 'react';
import {sortReducer} from "../homeWorkReducer";
import {PeoplesStateType, PeopleType} from "../../components/pages/HW8";

let initialState: Array<PeopleType>

beforeEach(() => {
    initialState = [
        {_id: 0, name: "Кот", age: 3},
        {_id: 1, name: "Александр", age: 66},
        {_id: 2, name: "Коля", age: 16},
        {_id: 3, name: "Виктор", age: 44},
        {_id: 4, name: "Дмитрий", age: 40},
        {_id: 5, name: "Ирина", age: 55},
        {_id: 6, name: "Яна", age: 18},
    ]
})

test("sort name alphabetically", () => {
    const resultState: PeoplesStateType = sortReducer(initialState, {type: "SORT", payload: "alphabetically"});

    console.log(resultState);

    expect(resultState[0].name).toBe("Александр")
    expect(resultState[6].name).toBe("Яна")
})

test("sort name reverse alphabetically", () => {
    const resultState: PeoplesStateType = sortReducer(initialState, {type: "SORT", payload: "reverseAlphabetically"});

  expect(resultState[0].name).toBe("Яна")
  expect(resultState[6].name).toBe("Александр")
})

test("check age 18", () => {
    const resultState: PeoplesStateType = sortReducer(initialState, {type: "CHECK", payload: 18});

    expect(resultState[0].age).toBeGreaterThanOrEqual(18)
    expect(resultState[1].age).toBeGreaterThanOrEqual(18)
    expect(resultState[2].age).toBeGreaterThanOrEqual(18)
    expect(resultState[3].age).toBeGreaterThanOrEqual(18)

})
