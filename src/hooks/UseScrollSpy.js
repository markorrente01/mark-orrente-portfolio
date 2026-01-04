import { useState, useEffect } from 'react';

const UseScrollSpy = (ids, offset = 100) => {
  const [activeId, setActiveId] = useState('');
  useEffect(()=>{
    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry=>{
                if(entry.isIntersecting){
                    setActiveId(entry.target.id)
                }
            })
        },
    {rootMargin: `-${offset}px 0% -70% 0%`})
    ids.forEach(id=>{
        const element = document.getElementById(id);
        if(element) observer.observe(element);
    })
    return ()=> observer.disconnect();
  },[ids, offset])
  return activeId;
}

export default UseScrollSpy
