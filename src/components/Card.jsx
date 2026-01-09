import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const Card = ({item}) => {
  return (
    <div>
        <div className="max-w-lg p-4 shadow-md dark:bg-gray-50 dark:text-gray-800 rounded-md">
	
	        <div className="space-y-4">
		        <div className="space-y-2">
			        <img src={item.photo} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
		        </div>
		        <div className="space-y-2">
                    <a rel="noopener noreferrer" href="#" className="block">
				        <h3 className="text-xl font-semibold dark:text-violet-600">{item.place}</h3>
			        </a>
			        <p className="leading-snug dark:text-gray-600">{item.description.substring(0,260)}</p>
                    <p className="leading-snug dark:text-gray-600">{item.date}</p>

		        </div>
	        </div>
            <div className="flex justify-end gap-4 mt-4">
		        <a rel="noopener noreferrer" href="#">
                    <DeleteIcon sx={{ color: "#ef4444", fontSize: 20 , cursor: "pointer" }} /><EditIcon sx={{fontSize: 20 , cursor: "pointer" }}/>
                </a>
	        </div>
        </div>
    </div>
  )
}
export default Card