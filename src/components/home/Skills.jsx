'use client';
import { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import Title from './Title';

const chartData = {
  style: {
    title: 'Style Skills',
    entries: [
      { value: 95, label: 'CSS' },
      { value: 90, label: 'Sass' },
      { value: 70, label: 'Tailwind CSS' },
      { value: 80, label: 'Bootstrap' },
      { value: 80, label: 'Blade' },
    ],
  },
  'front-end': {
    title: 'Front-End Skills',
    entries: [
      { value: 95, label: 'HTML' },
      { value: 80, label: 'JavaScript' },
      { value: 90, label: 'TypeScript' },
      { value: 80, label: 'React' },
      { value: 80, label: 'Next.js' },
    ],
  },
  'back-end': {
    title: 'Back-End Skills',
    entries: [
      { value: 85, label: 'Node.js' },
      { value: 80, label: 'Express' },
      { value: 80, label: 'NestJS' },
      { value: 80, label: 'Laravel' },
    ],
  },
  database: {
    title: 'Database Skills',
    entries: [
      { value: 80, label: 'MySQL' },
      { value: 80, label: 'MongoDB' },
      { value: 70, label: 'PostgreSQL' },
      { value: 85, label: 'Firebase' },
    ],
  },
  other: {
    title: 'Other Skills',
    entries: [
      { value: 80, label: 'WordPress' },
      { value: 80, label: 'Shopify' },
      { value: 85, label: 'Git/GitHub' },
    ],
  },
};

export default function SkillChart({ darkMode, t }) {
  const skillsRef = useRef(null);
  const sectionRef = useRef(null);
  const hasAnimatedRef = useRef(false);
  const svgChart = {
    width: 360,
    height: 360,
    radius: 100,
    sectorWidth: 0.2,
    radScale: 55,
    sectorScale: 1,
    shorten: 1.33,
    index: {
      start: 0,
      increase: 0.18,
    },
    class: 'chart',
    elements: [
      { id: 1, type: 'g', class: 'bars', transform: { translate: { x: 180, y: 194 } } },
      { id: 2, type: 'text', class: 'rating', transform: { translate: { x: 240, y: 262 } }, style: 'font: 11px "Open Sans", Arial; text-transform: uppercase; fill: #888;' },
      { id: 3, type: 'text', class: 'label', transform: { translate: { x: 290, y: 263 } }, style: 'font: 15px "Open Sans", Arial; text-transform: uppercase;' },
      { id: 4, type: 'text', class: 'title', transform: { translate: { x: 180, y: 32 } }, style: 'font: 28px "Open Sans", Arial; ' },
    ],
    borderColor: '#eee',
    barColors: darkMode ? ['#60A5FA', '#A78BFA', '#34D399', '#FB923C', '#818CF8', '#F472B6', '#2DD4BF', '#FBBF24'] : ['#3B82F6', '#8B5CF6', '#10B981', '#F97316', '#6366F1', '#EC4899', '#14B8A6', '#F59E0B'],
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            if (!hasAnimatedRef.current || !entry.target.classList.contains('was-animated')) {
              adjustSizes();
              showAll();
              hasAnimatedRef.current = true;
              entry.target.classList.add('was-animated');
            }
          } else {
            entry.target.classList.remove('was-animated');
            hasAnimatedRef.current = false;
          }
        });
      },
      { threshold: 0.4 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const adjustSizes = () => {
    if (!skillsRef.current) return;

    const div = skillsRef.current;
    const style = window.getComputedStyle(div);
    const marginBottom = parseInt(style.marginBottom, 10);

    const h1 = div.offsetHeight;
    const h2 = div.getBoundingClientRect().height;
    div.style.marginBottom = '-' + (Math.floor(Math.abs(h1 - h2)) + Math.abs(marginBottom) - 16 + 'px');

    window.requestAnimationFrame(adjustSizes);
  };

  const drawBarCircleChart = id => {
    const data = [...chartData[id].entries].sort((a, b) => (a.value < b.value ? 1 : -1));
    const size = 100 * svgChart.shorten;

    const bars = d3.select(`#${id} .${svgChart.elements.find(x => x.id === 1).class}`);
    const rating = d3.select(`#${id} .${svgChart.elements.find(x => x.id === 2).class}`);
    const label = d3.select(`#${id} .${svgChart.elements.find(x => x.id === 3).class}`);
    const title = d3.select(`#${id} .${svgChart.elements.find(x => x.id === 4).class}`);

    title.text(chartData[id].title).attr('fill', darkMode ? '#fff' : '#000');

    const arc = d3
      .arc()
      .innerRadius((d, i) => ((svgChart.index.start + i * svgChart.index.increase) / svgChart.sectorScale) * svgChart.radius + svgChart.radScale)
      .outerRadius((d, i) => ((svgChart.index.start + i * svgChart.index.increase) / svgChart.sectorScale + svgChart.sectorWidth / svgChart.sectorScale) * svgChart.radius + svgChart.radScale)
      .startAngle(Math.PI)
      .endAngle(d => Math.PI + (d.value / (100 * svgChart.shorten)) * 2 * Math.PI - 0.05);

    const path = bars.selectAll('path').data(data);

    path
      .enter()
      .append('svg:path')
      .attr('fill', (d, i) => svgChart.barColors[i])
      .attr('stroke', darkMode ? '#383839' : '#eee')
      .transition()
      .ease(d3.easeElastic)
      .duration(2000)
      .delay((d, i) => i * 75)
      .attrTween('d', arcTween);

    rating
      .selectAll('tspan')
      .data(data)
      .enter()
      .append('tspan')
      .attr('x', -50)
      .attr('y', (d, i) => i * 20)
      .attr('fill', darkMode ? '#fff' : '#000')
      .text(d => `${d.value}%`);

    label
      .selectAll('tspan')
      .data(data)
      .enter()
      .append('tspan')
      .attr('x', -50)
      .attr('y', (d, i) => i * 20)
      .attr('fill', darkMode ? '#fff' : '#000')
      .text(d => d.label);

    function arcTween(b, j) {
      const i = d3.interpolate({ value: 0 }, b);
      return function (t) {
        return arc(i(t), j);
      };
    }
  };

  const show = id => {
    const existingElement = document.getElementById(id);
    if (existingElement) {
      existingElement.outerHTML = '';
    }

    svgCreate(id, 'skills-section');
    setTimeout(() => {
      drawBarCircleChart(id);
    }, 10);
  };

  const svgCreate = (id, targetElm) => {
    const div = document.createElement('DIV');
    div.id = id;
    div.className = 'inline-block mx-auto mb-8';

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', `0 0 ${svgChart.width} ${svgChart.height}`);
    svg.setAttribute('width', '100%');
    svg.setAttribute('height', 'auto');
    svg.setAttribute('class', svgChart.class);
    svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');

    svgChart.elements.forEach(elm => {
      svg.appendChild(svgCreateElement(svg.namespaceURI, elm.type, elm.class, elm.transform, elm.style));
    });

    div.appendChild(svg);

    if (!targetElm) {
      return document.body.appendChild(div);
    }
    return document.getElementById(targetElm).appendChild(div);
  };

  const svgCreateElement = (svgNS, elmType, elmClass, elmTransform, elmStyle) => {
    const elm = document.createElementNS(svgNS, elmType);
    elm.setAttribute('class', elmClass);

    if (elmClass === 'title') {
      elm.setAttribute('text-anchor', 'middle');
    }

    if (elmTransform?.translate) {
      elm.setAttribute('transform', `translate(${elmTransform.translate.x}, ${elmTransform.translate.y})`);
    }

    if (elmStyle) {
      elm.setAttribute('style', elmStyle);
    }

    return elm;
  };

  const showAll = () => {
    show('front-end');
    show('back-end');
    show('database');
    show('other');
  };

  return (
    <div id="skills" dir="ltr" ref={sectionRef} className={`min-h-fit py-32 flex flex-col items-center justify-center bg-two`}>
      <div className=' container mx-auto '>
        <Title title={t.skills.title} />

        <div id='skills-section' ref={skillsRef} className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center'></div>
      </div>
    </div>
  );
}
