import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StudentCard from '../components/StudentCard';

function Home(){
    const navigate = useNavigate();
    const [students, setStudents] = useState([]);
    useEffect(()=>{
        const stored = JSON.parse(localStorage.getItem('students')) || [];
        setStudents(stored);
    }, []);
    return(
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {
                students.length === 0 ?  (
                    <p>No Students Added Yet.</p>
                ) : (
                    students.map((s) => (
                        <StudentCard key={s.id} student={s} />
                    ))
                )
            }
        </div>
    )
}

export default Home;