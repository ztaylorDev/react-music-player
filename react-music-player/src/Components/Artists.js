import React from 'react';

const FolkRockList = ({FolkRockList=[]}) => {
  return (
    <>
    { FolkRockList.map((data,index) => {
        if (data) {
          return (
            <div key={data.genre}>
              <h1>{data.genre}</h1>
	    </div>	
    	   )	
    	 }
    	 return null
    }) }
    </>
  );
}

export default FolkRockList