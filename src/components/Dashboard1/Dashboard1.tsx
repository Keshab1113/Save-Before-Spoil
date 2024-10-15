"use client";
import {
    Badge,
    Button,
    Checkbox,
    Datepicker,
    Label,
    Select,
    Table,
    TextInput,
} from "flowbite-react";
import { HiSearch } from "react-icons/hi";
import { FaFilter } from "react-icons/fa";
import { SlGraph } from "react-icons/sl";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
// import { addIngredient } from "@/redux/slice/itemsSlice";
import { useRouter } from "next/router";
import Foods from "../data/product.json"; // Adjust the path based on your project structure
import { daysLeft, reducedPrice } from "@/components/Dashboard1/CommonFn";

interface FoodItem {
    name: string;
    price: number;
    expireDate: string;
    inStockQuantity: number;
}

const Dashboard1 = () => {
    const [start, setStart] = useState<number>(0);
    const [end, setEnd] = useState<number>(8);
    const [searchVal, setSearchVal] = useState<string>('');
    const [selected, setSelected] = useState<FoodItem[]>([]);
    // const dispatch = useDispatch();
    // const router = useRouter();

    const handelSelect = (checked: boolean, value: FoodItem) => {
        if (checked) {
            setSelected([...selected, value]);
        } else {
            setSelected(selected.filter((item) => item.name !== value.name));
        }
    };

    const handelSubmit = () => {
        // dispatch(addIngredient(selected));
        // router.push('/donate-to-food-bank');
    };

    const performOperations = (
        products: FoodItem[],
        options: { sortBy?: string; range?: { field: keyof FoodItem; min: number; max: number } }
    ) => {
        let result = [...products];

        if (options.sortBy) {
            result.sort((a, b) => (a[options.sortBy as keyof FoodItem] > b[options.sortBy as keyof FoodItem] ? 1 : -1));
        }

        // if (options.range && options.range.field) {
        //     result = result.filter(
        //         (product) =>
        //             product[options.range.field] >= options.range.min &&
        //             product[options.range.field] <= options.range.max
        //     );
        // }

        return result;
    };

    return (
        <section className="w-full min-h-screen flex p-6">
            <div className="w-1/4 h-full bg-gray-50 p-6 rounded-md">
                <div>
                    <Label htmlFor="search" value="Search food" />
                    <TextInput
                        type="search"
                        className="mt-1"
                        icon={HiSearch}
                        placeholder="Search food.."
                        onChange={(e) => setSearchVal(e.target.value)}
                    />
                </div>
                <div className="flex items-center space-x-2 mt-6 mb-2 text-xl font-semibold text-gray-700">
                    <FaFilter size={18} />
                    <span>Filter</span>
                </div>
                <div>
                    <Label htmlFor="Sort by" value="Sort by foods" />
                    <Select className="mt-1 w-full">
                        <option value="">Sort by</option>
                        <option value="Low to High">Low to High</option>
                        <option value="High to Low">High to Low</option>
                    </Select>
                </div>
                <div className="space-y-3 my-4">
                    <h1 className="text-gray-700 font-bold">Search between date intervals</h1>
                    <div>
                        <Label htmlFor="startDate" className="mt-1" value="Start date" />
                        <Datepicker onChange={(e) => console.log(e)} />
                    </div>
                    <div>
                        <Label htmlFor="endDate" className="mt-1" value="Ending date" />
                        <Datepicker onChange={(e) => console.log(e)} />
                    </div>
                </div>
                <Button>Search</Button>
            </div>

            <div className="w-3/4 h-full ps-6 ">
                <div className="w-full h-full bg-white rounded-md mb-4">
                    <div className="overflow-x-auto">
                        <Table hoverable>
                            <Table.Head>
                                <Table.HeadCell className=" bg-slate-200"></Table.HeadCell>
                                <Table.HeadCell className=" bg-slate-200">Food name</Table.HeadCell>
                                <Table.HeadCell className=" bg-slate-200">Price</Table.HeadCell>
                                <Table.HeadCell className=" bg-slate-200">Expire Date</Table.HeadCell>
                                <Table.HeadCell className=" bg-slate-200">Days remaining</Table.HeadCell>
                                <Table.HeadCell className=" bg-slate-200">In stock</Table.HeadCell>
                            </Table.Head>
                            <Table.Body className="divide-y">
                                {Foods.filter((ele) =>
                                    ele.name.toLowerCase().includes(searchVal.toLowerCase())
                                )
                                    .slice(start, end)
                                    .map((food, index) => {
                                        const { name, price, expireDate, inStockQuantity } = food;
                                        return (
                                            <Table.Row
                                                className="bg-white dark:border-gray-700 dark:bg-gray-800"
                                                key={index}
                                            >
                                                <Table.Cell>
                                                    <Checkbox
                                                        onChange={(e) =>
                                                            handelSelect(e.target.checked, food)
                                                        }
                                                    />
                                                </Table.Cell>
                                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                    {name}
                                                </Table.Cell>
                                                <Table.Cell>
                                                    <div className="text-base font-medium text-gray-700">
                                                        {price !== reducedPrice(price, daysLeft(expireDate)) ? (
                                                            <div className="flex items-center space-x-2">
                                                                <span className="text-gray-400 line-through">
                                                                    {price}
                                                                </span>
                                                                <span>
                                                                    {reducedPrice(price, daysLeft(expireDate))}
                                                                </span>
                                                                <SlGraph className={"rotate-90 text-red-500"} />
                                                            </div>
                                                        ) : (
                                                            <span>{price}</span>
                                                        )}
                                                    </div>
                                                </Table.Cell>
                                                <Table.Cell>{expireDate}</Table.Cell>
                                                {daysLeft(expireDate) > 0 ? (
                                                    <Table.Cell
                                                        className={`${daysLeft(expireDate) > 30
                                                                ? "text-green-500"
                                                                : "text-orange-600"
                                                            } text-sm font-medium`}
                                                    >
                                                        {daysLeft(expireDate)} days left
                                                    </Table.Cell>
                                                ) : (
                                                    <Table.Cell>
                                                        <Badge className="inline-block rounded-full bg-red-500 text-white">
                                                            Expired
                                                        </Badge>
                                                    </Table.Cell>
                                                )}
                                                <Table.Cell>{inStockQuantity}</Table.Cell>
                                            </Table.Row>
                                        );
                                    })}
                            </Table.Body>
                        </Table>
                    </div>
                </div>
                {selected.length > 0 && (
                    <div className="flex items-center my-4 justify-end">
                        <Button onClick={handelSubmit}>Donate</Button>
                    </div>
                )}
                <div className="flex items-center gap-x-6 justify-end">
                    <Button
                        disabled={start === 0}
                        onClick={() => {
                            setStart(start - 5);
                            setEnd(end - 5);
                        }}
                    >
                        Prev
                    </Button>
                    <Button
                        disabled={end >= Foods.length}
                        onClick={() => {
                            setStart(start + 5);
                            setEnd(end + 5);
                        }}
                    >
                        Next
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Dashboard1;

