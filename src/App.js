import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Content from './components/Content';
import {useEffect,useState,useRef} from 'react';

function App() {
 const [scrolled,setScrolled]=useState(false);
 const [visibleSection, setVisibleSection] = useState();
 const headerRef = useRef(null);
  const post1Ref=useRef(null);
  const post2Ref=useRef(null);
  const post3Ref=useRef(null);
  const post4Ref=useRef(null);
  const sectionRefs = [
    { section: "post1", ref: post1Ref },
    { section: "post2", ref: post2Ref },
    { section: "post3", ref: post3Ref },
    { section: "post4", ref: post4Ref },
  ];
  const getDimensions = (ele) => {
    const { height } = ele.getBoundingClientRect();
    const offsetTop = ele.offsetTop;
    const offsetBottom = offsetTop + height;

    return {
      height,
      offsetTop,
      offsetBottom,
    };
  };
 let navbarClasses=['navbar'];
  if(scrolled){
    navbarClasses.push('scrolled');
  }


  const handleScroll = () => {
    const { height: headerHeight } = getDimensions(headerRef.current);
    const scrollPosition = window.scrollY + headerHeight ;
    console.log(scrollPosition)
    const offset=window.scrollY;
    if(offset > 200 ){
      setScrolled(true);
    }
    else{
      setScrolled(false);
    }

    const selected = sectionRefs.find(({ section, ref }) => {
      const ele = ref.current;
      if (ele) {
        const { offsetBottom, offsetTop } = getDimensions(ele);
        return scrollPosition > offsetTop && scrollPosition < offsetBottom;
      }
    });

    if (selected && selected.section !== visibleSection) {
      setVisibleSection(selected.section);
      console.log(selected)
    }
  };
useEffect(() => {
  window.addEventListener("scroll", handleScroll);
}, [visibleSection]);

  return (
    <div className="App">
      <Navbar navbarClasses={navbarClasses} headerRef={headerRef} visibleSection={visibleSection} />
      <Content post1Ref={post1Ref} post2Ref={post2Ref} post3Ref={post3Ref} post4Ref={post4Ref} />
    </div>
  );
}

export default App;
