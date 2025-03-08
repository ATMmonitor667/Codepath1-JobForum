import React from "react";
import {useState, useEffect} from "react";
import Data from '../Data'
import JobCard from "./JobCard";
import './DashBoard.css'
const DashBoard: React.FC = () =>
{
    const [data, setData] = useState(Data);
    const [sortTrue, setsortTrue] = useState(false);
    const [sortFalse, setsortFalse] = useState(false);
    function handleSalarySort() {
        if (sortTrue) {
        const currData = [...data];  
        currData.sort((a, b) => -1 * (Number(a.jobDescription.salary) - Number(b.jobDescription.salary)));
        setData(currData);
        setsortTrue(!sortTrue);
        }
        else{
            const currData = [...data];  
            currData.sort((a, b) => Number(a.jobDescription.salary) - Number(b.jobDescription.salary));
            setData(currData);
            setsortTrue(!sortTrue);

        }
    }
    function handleAlphabet()
    {
        if (sortFalse) {
        let currData = [...data];
        currData = currData.sort(function (a, b) {
            return a.company.localeCompare(b.company);
            ;
        })
        setData(currData);
        setsortFalse(!sortFalse);
    }
   else {
        let currData = [...data];
        currData.sort((a, b) => b.company.localeCompare(a.company));
        setData(currData);
        setsortFalse(!sortFalse);
      }
    }

    return (
        <div>
        <h1>Dashboard</h1>
        <div className = "div">
            <button onClick = {handleSalarySort} className = "SalarySort"><h3>Sort by Salary</h3></button>
            <button onClick = {handleAlphabet} className = "AlphaSort"> <h3>Sort by Name</h3></button>
        </div>
        {data && data.length > 0 && 
          (
            data.map((item, index) => (
              <JobCard
                key={index} // Ensure you have a unique key for each item
                company={item.company}
                logoUrl={item.logoUrl}
                jobDescription={item.jobDescription}
              />
            ))
          )
        }
      </div>
    )

}

export default DashBoard;