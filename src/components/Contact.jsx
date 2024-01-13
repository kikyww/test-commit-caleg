import { useState } from 'react';
import Poster from '../assets/img/caleg.jpeg';

const Contact = () => {
	const [name, setName] = useState('')
	const [address, setAddress] = useState('')

	const handleSendButton = async () => {
		const phoneNumber = "6285787121453";
	  	const encodedName = encodeURIComponent(name);
	  	const encodedAdress = encodeURIComponent(address);
	  	const currentTimestamp = new Date().toISOString();
	
	  	const whatsAppURL = `https://wa.me/${phoneNumber}?text=Saya%20${encodedName},%20Pendukung%20Ibu%20HENDRAWATI:%0A%0ANama%3A%20${encodedName}%0AAlamat%3A%20${encodedAdress}`;
	  	window.open(whatsAppURL, "_blank");

	  	const scriptURL = 'https://script.google.com/macros/s/	AKfycbyLkmonuyc8sBBVnQv_BWTtRta7OgGQHoXn62nS-byDvxFAsJrOas28MKHlIVZhkt5ZgQ/exec';
	  	const data = { name: encodedName, address: encodedAdress, timestamp:currentTimestamp }; 
	
	  	try {
	  	  const response = await fetch(scriptURL, {
	  	    method: 'POST',
	  	    mode: 'no-cors',
	  	    headers: {
	  	      'Content-Type': 'application/x-www-form-urlencoded',
	  	    },
	  	    body: new URLSearchParams(data).toString(),
	  	  });
		
	  	  if (response.ok) {
	  	    console.log('Data berhasil dikirim.');
	  	  } else {
	  	    console.error('Di log Gagal, tapi berhasil ngirim?? memang aneh JavaScript');
	  	  }
	  	} catch (error) {
	  	  console.error('Error:', error);
	  	}
	};

	return(
		<div className="flex flex-col md:flex-row justify-center md:justify-between items-center px-6 gap-8">
			<div className="flex justify-center w-full">
				<div className="p-4 w-full h-full md:w-[300px] border-4 border-slate-900 bg-white rounded-xl shadow-lg shadow-white">
					<img src={Poster} alt="poster" className="rounded-lg shadow-lg shadow-blue-800 hover:scale-110 cursor-pointer transition-all duration-700 ease-in-out" />
				</div>
			</div>
			<div className="flex justify-center w-full">
				<div className="p-4 w-full h-full md:w-[300px] border-4 border-slate-100 bg-blue-800 rounded-xl shadow-lg shadow-white">
					<div>
						<h3 className="text-center font-bold text-white text-2xl">DUKUNGAN ANDA</h3>
						<div className="flex flex-col">
							<label className="text-white font-bold text-lg my-1">Nama</label>
							<input 
								className="py-1 px-3 rounded-full" 
								type="text" 
								placeholder="Nama Lengkap"
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</div>
						<div className="flex flex-col">
							<label className="text-white font-bold text-lg mt-3 my-1">Alamat Lengkap</label>
							<input 
								className="py-1 px-3 rounded-full" 
								type="text" 
								placeholder="Alamat Tinggal Sekarang"
								value={address}
								onChange={(e) => setAddress(e.target.value)}
							/>
						</div>
						{name && address 
						? 
						<div className="flex justify-end mt-4">
							<button 
								className="py-2 font-semibold px-4 rounded-full border-2 border-green-600 bg-green-500 shadow-md shadow-slate-900 hover:bg-green-600 focus:bg-green-700 focus:text-slate-200"
								onClick={handleSendButton}
							>
								Kirim
							</button>
						</div>
						:
						<div className="flex justify-end mt-4">
							<button 
								className="py-2 font-semibold px-4 rounded-full cursor-not-allowed border-2 border-red-500 bg-red-500 shadow-md shadow-slate-900"
							>
								Kirim
							</button>
						</div>
						}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contact;