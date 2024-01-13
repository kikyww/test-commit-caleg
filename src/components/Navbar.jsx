import Demokrat from "../assets/img/logo-demokrat.png"

const Navbar = () => {
	return(
		<div className="bg-blue-700 w-full py-4 px-6">
			<div className="flex justify-between items-center">
				<a href="#">
					<img 
						src={Demokrat}
						alt="demokrat"
						className="w-14 border hover:scale-110 transition-all ease-in-out duration-500"
					/>
				</a>
				<div className="flex gap-3 text-slate-100">
					<a className="hover:text-slate-300" href="#">Profile</a>
					<a className="hover:text-slate-300" href="#">Contact</a>
				</div>
			</div>
		</div>
	)
}

export default Navbar;