import React, { useEffect, useState } from 'react';
import API from '../utils/API';
import exercises from '../utils/exercises';
import Navbar from '../components/navbar';
import WorkoutBanner from '../components/workoutBanner';



function NewWorkOutPage() {
    let [search, setSearch] = useState("");

    const handleChange = () => {
        
    }

    return (
        <div>
            <Navbar />
            <WorkoutBanner />
        </div>
    );
};
export default NewWorkOutPage;