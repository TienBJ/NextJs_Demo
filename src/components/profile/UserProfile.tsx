import Image from "next/image";
import React from "react";

const UserProfile = (props: any) => {
	return (
		<div>
			{props.type === "View" ? (
				<>
					<div className="flex space-x-10 mt-10 shadow border-1 border-gray-200 items-center ">
						<div>
							<Image
								src={props.img}
								width={200}
								height={250}
								className="rounded-xl"
							/>
						</div>
						<div>
							<div className="flex border border-gray-300 p-4 h-16 rounded-lg m-2">
								<span className="font-semibold pr-4 mb-8">Image : </span>
								<input type="file" />
							</div>

							<div className="flex items-center border border-gray-300 p-4 h-16 rounded-lg m-2">
								<span className="font-semibold pr-4 "> Name: </span>
								<input
									type="text"
									placeholder={props.name}
									className="w-full rounded pl-5 h-10 focus:outline-none focus:ring-[2px]"
								/>
							</div>

							<div className="flex items-center border border-gray-300 p-4 h-16 rounded-lg m-2">
								<span className="font-semibold pr-4 "> Phone: </span>
								<input
									type="text"
									placeholder={props.phone}
									className="w-full rounded pl-5 h-10 focus:outline-none focus:ring-[2px]"
								/>
							</div>

							<div className="flex items-center border border-gray-300 p-4 h-16 rounded-lg m-2">
								<span className="font-semibold pr-4 "> Adress: </span>
								<input
									type="text"
									placeholder={props.name}
									className="w-full rounded pl-5 h-10 focus:outline-none focus:ring-[2px]"
								/>
							</div>
						</div>
						<div>
							<div className="flex items-center border border-gray-300 p-4 h-16 rounded-lg m-2">
								<span className="font-semibold pr-4 "> Email: </span>
								<input
									type="text"
									placeholder={props.email}
									className="w-full rounded pl-5 h-10 focus:outline-none focus:ring-[2px]"
								/>
							</div>

							<div className="flex items-center border border-gray-300 p-4 h-16 rounded-lg m-2">
								<span className="font-semibold pr-4 "> Phone: </span>
								<input
									type="text"
									placeholder={props.name}
									className="w-full rounded pl-5 h-10 focus:outline-none focus:ring-[2px]"
								/>
							</div>

							<div className="flex items-center border border-gray-300 p-4 h-16 rounded-lg m-2">
								<span className="font-semibold pr-4 ">Department: </span>
								<input
									type="text"
									placeholder={props.name}
									className="w-full rounded pl-5 h-10 focus:outline-none focus:ring-[2px]"
								/>
							</div>

							<div className="flex items-center border border-gray-300 p-4 h-16 rounded-lg m-2">
								<span className="font-semibold pr-4 "> Roles: </span>
								<input
									type="text"
									placeholder={props.role}
									className="w-full rounded pl-5 h-10 focus:outline-none focus:ring-[2px]"
								/>
							</div>
						</div>
					</div>
					<div className="flex justify-between mt-10">
						<button className="bg-red-300 h-12 w-32 text-red-700 font-semibold rounded-lg p-3 mt-5">
							Delete User
						</button>
						<button className="bg-blue-300 h-12 w-32 text-blue-700 font-semibold rounded-lg p-3 mt-5">
							Save
						</button>
					</div>
				</>
			) : (
				"edit sayfası"
			)}
		</div>
	);
};

export default UserProfile;
