import Caleg from '../assets/img/foto.png'
import Empat from '../assets/img/empat.png'
import Logo from '../assets/img/logo-demokrat.png'

const Hero = () => {
	return(
		<div className="text-slate-100 bg-demokrat">
			<div className="flex flex-col md:flex-row justify-center md:justify-between">	
				<div className="w-full px-6 py-4 font-bold text-lg md:bg-transparent bg-blue-800">
					<h2 className="md:py-8 py-4 font-bold text-2xl">KOMITMEN BERSAMA HENDRAWATI DAN PENDUKUNG</h2>
					<p className="mt-2 text-slate-100 md:text-white">1. Santunan Berobat Selama 5 Tahun ( Dokter Umum 2x Per Tahun)</p>
					<p className="mt-2 text-slate-100 md:text-white">2. Santunan Perkawinan Selama 5 Tahun Per Nama Terdaftar Pemilih Hendrawati</p>
					<p className="mt-2 text-slate-100 md:text-white">3. Santunan Kematian Per Nama Terdaftar Pemilih Hendrawati Selama 5 Tahun</p>
				</div>
				<div className="md:py-14 w-[400px] md:w-[600px] h-full">
					<div className="group flex flex-col justify-center items-center  md:w-[90%] md:h-[70vh]">
						<img src={Caleg} alt="poster" className="w-[900px] group-hover:scale-110 cursor-pointer transition-all duration-700 ease-in-out" />
						<img src={Empat} alt="empat" className="absolute z-10  min-[360px]:top-[900px] min-[428px]:top-[835px] right-0 md:top-[470px] md:right-7 w-24 group-hover:scale-110 cursor-pointer transition-all duration-700 ease-in-out" />
						<div className="w-[300px] bg-red-700 rounded-xl text-center group-hover:scale-110 cursor-pointer transition-all duration-700 ease-in-out">
							<p className="text-2xl font-bold">HENDRAWATI</p>
							<p className="text-sm">Calon Legislatif Kota Banjarmasin</p>
							<p className="text-sm">Daerah Pemilihan 2 - Banjarmasin Utara</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hero;