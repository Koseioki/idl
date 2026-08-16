// const DrawingPathsAndViewBoxes = {
//   Placeholder: [
//     "M2.29219 11.0094C2.29219 11.1118 2.31387 23.5795 2.39745 42.7588C2.42693 49.5232 2.56081 50.2601 2.76441 57.1162C2.96801 63.9723 3.27067 76.9251 3.26615 89.3673C3.26163 101.81 2.94076 113.349 2.68614 128.364C2.43152 143.38 2.25287 161.522 2.23629 171.204C2.21856 181.559 2.55556 183.29 2.64013 187.915C2.81719 197.599 2.96646 204.606 3.41994 205.88C3.85403 207.099 6.08405 207.265 14.125 207.429C21.0139 207.57 33.6097 207.504 43.14 207.426C52.6703 207.349 58.7547 207.18 70.9185 207.332C83.0823 207.485 101.141 207.965 123.894 207.679C146.646 207.393 173.544 206.327 190.016 205.852C211.71 205.227 218.064 205.746 222.044 205.88C236.073 206.351 242.453 206.438 252.409 206.649C254.503 206.693 255.922 206.778 256.376 206.606C256.927 206.397 257.996 203.749 260.275 199.831C264.849 191.967 261.688 184.537 262.104 180.19C262.194 179.251 262.142 178.09 262.104 170.533C262.067 162.975 261.992 149.053 261.17 134.933C260.348 120.814 258.78 106.92 257.726 98.1578C255.789 82.0466 255.473 78.8935 255.358 66.7833C255.266 57.186 255.251 38.8856 255.082 28.8643C254.862 15.7268 253.385 12.8633 251.831 10.3103C251.076 9.06834 246.924 8.36912 228.49 6.77221C213.168 5.44491 185.61 4.73215 169.097 3.91119C147.908 2.8577 142.451 2.03929 137.289 2.00308C132.793 1.97154 124.487 2.18454 107.448 2.4391C90.4086 2.69367 64.8881 3.0527 50.5974 3.38464C34.0116 3.7699 28.18 4.66036 22.4891 5.26096C17.8336 5.75227 14.752 7.0175 11.5591 8.01767C8.13265 8.83093 5.76654 9.37544 4.09407 9.78524C3.31222 9.99211 2.66614 10.1968 2.00049 10.4076, M3.9137 179.494C3.95532 178.656 4.80299 176.027 12.4668 166.512C16.6881 161.272 20.5037 156.717 27.2346 150.336C39.4599 138.746 48.8638 130.597 51.5753 127.668C57.3526 121.428 60.8916 118.252 64.4661 117.318C69.2757 116.061 74.6076 116.523 80.7301 117.422C82.5799 117.694 85.9535 119.168 91.955 121.811C107.479 128.647 115.943 137.428 119.376 140.994C123.702 145.488 128.231 151.656 136.278 160.771C140.101 165.103 146.246 171.332 150.863 176.474C163.732 190.806 166.881 196.929 168.911 199.194C169.862 200.438 170.777 201.61 171.733 202.68C172.238 203.246 172.785 203.859 173.349 204.491, M121.942 143.039C122.073 141.826 124.668 135.009 131.62 125.057C140.292 112.643 149.702 106.083 151.74 104.412C155.392 101.417 157.354 98.4429 160.045 95.0326C165.392 88.2546 174.094 80.8836 181.265 79.6058C185.337 78.8802 188.558 82.97 191.47 85.059C193.684 86.6466 199.512 92.765 209.254 104.049C214.544 110.175 219.507 117.964 223.144 123.532C228.876 132.305 231.514 137.558 233.497 141.193C238.007 149.463 246.486 158.578 250.874 164.039C254.142 168.856 258.28 175.934 260.789 179.943C261.79 181.493 262.24 182.06 262.499 182.613, M75.2093 70.5477C70.4988 70.5477 58.9274 70.0586 54.307 68.2616C49.655 66.4524 47.5241 62.2804 46.9045 59.4845C46.5735 57.9907 46.6517 55.5524 46.7605 52.7919C46.8321 50.9763 47.8325 49.7762 49.3827 48.3614C53.9814 44.1644 58.3093 44.4866 61.3911 44.3077C65.9468 44.0433 68.8839 46.1065 71.4853 48.0319C74.4494 50.2257 76.2764 53.577 78.253 58.0485C79.0252 59.7954 78.9042 62.2508 78.6722 64.8773C77.9763 66.595 76.6024 67.8201 74.932 68.8476C74.1575 69.2887 73.5313 69.5671 71.7352 70.8578",
//     "0 0 264 210",
//   ],
//   TwoPeopleCraftingICT: ["M10 10 H 90 V 90 H 10 L 10 10", "0 0 100 100"],
// };

import { useEffect, useRef, useState } from 'react';
import Placeholder from '../../assets/drawings/placeholder.svg';
import TwoPeopleCraftingICT from '../../assets/drawings/two-people-crafting-ict.svg';
import HomeNGO from '../../assets/drawings/home-ngo.svg';
import Share from '../../assets/drawings/share.svg';
import Experiment from '../../assets/drawings/experiment.svg';
import Contact from '../../assets/drawings/contact.svg';
import Research from '../../assets/drawings/research.svg';
import Library from '../../assets/drawings/library.svg';
import LowSignal from '../../assets/drawings/low-signal.svg';
import Businessman from '../../assets/drawings/businessman.svg';

import './Drawing.css';

const svgMap = {
  Placeholder,
  TwoPeopleCraftingICT,
  HomeNGO,
  Experiment,
  Contact,
  Research,
  Share,
  Library,
  LowSignal,
  Businessman
};

const drawingAriaLabels = {
  Placeholder: '',
  TwoPeopleCraftingICT:
    'Two people are discussing a computer. One person has tangled thoughts above their head, while the other has a light bulb above hers',
  HomeNGO: 'A house with the Intersectional Design Lab’s logo and a tag that reads “NGO”',
  Share: 'A person with short curly hair and earrings is presenting a slide',
  Experiment: 'Two people, one with glasses, short hair, and a beard, and the other with longer hair, are having a discussion',
  Contact: 'Contact illustration',
  Research: 'A person with long hair is looking at a piece of paper through a magnifying glass, with a concentrated expression and thought bubbles showing tangled ideas',
  Library: 'A person wearing glasses and a scarf around their head is holding books in front of a bookshelf'
};

type DrawingName = keyof typeof svgMap;

type DrawingProps = {
  name: DrawingName;
  strokeColor?: string;
};

export function Drawing({ name, strokeColor = "currentColor" }: DrawingProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [svgContent, setSvgContent] = useState<string>('');
  const ariaLabel = drawingAriaLabels[name] || drawingAriaLabels.Placeholder;

  useEffect(() => {
    const svgPath = svgMap[name] || svgMap.Placeholder;
    fetch(svgPath)
      .then(response => response.text())
      .then(svg => setSvgContent(svg));
  }, [name]);

  useEffect(() => {
    if (containerRef.current && svgContent) {
      const div = containerRef.current;
      div.innerHTML = svgContent;
      
      // Override all stroke attributes
      const svgElement = div.querySelector('svg');
      if (svgElement) {
        const allElements = svgElement.querySelectorAll('*');
        allElements.forEach((el: Element) => {
          if (el.hasAttribute('stroke')) {
            el.setAttribute('stroke', strokeColor);
          }
        });
        
        // Also add a style to catch any CSS-defined strokes
        const style = document.createElementNS('http://www.w3.org/2000/svg', 'style');
        style.textContent = `* { stroke: ${strokeColor}}`;
        svgElement.insertBefore(style, svgElement.firstChild);
      }
    }
  }, [svgContent, strokeColor]);

  // return <div ref={containerRef} style={{ display: 'inline-block', lineHeight: 0 }} />;
    return (
    <div className="drawing" ref={containerRef} aria-label={`${ariaLabel}, drawing`} role="img" />
  );

}
