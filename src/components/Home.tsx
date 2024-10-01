import React from "react";
import { count, useStore } from "../store/useStore";
import { useAtomValue } from "jotai";

const Home: React.FC = () => {
	return (
		<div className='flex flex-col items-center p-4'>
			<span>Count = {useAtomValue(count)}</span>
			<span className='flex gap-1'>
				<button
					className='border-solid border-2 border-red-500 rounded px-2'
					onClick={() => useStore.set(count, (prev) => prev - 1)}
				>
					-1
				</button>
				<button
					className='border-solid border-2 border-red-500 rounded px-2'
					onClick={() => useStore.set(count, (prev) => prev + 1)}
				>
					+1
				</button>
			</span>
		</div>
	);
};

export default Home;
