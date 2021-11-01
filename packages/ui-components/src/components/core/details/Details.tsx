import React, { useEffect } from "react"

export type DetailsProps = {
  summary: JSX.Element | string;
  description: JSX.Element | string;
  className?: string;
  open?: boolean;
}

export const Details: React.FC<DetailsProps> = ({ summary, description, className, open }) => {
  const containerRef = React.createRef<HTMLDivElement>();
  const [isOpen, setOpen] = React.useState(open);

  useEffect(() => {
    const detail = containerRef.current?.parentElement as HTMLDetailsElement;
    const container = containerRef.current as HTMLDivElement;
    const content = detail.querySelector('.details__content') as HTMLDivElement;
    console.log(open, isOpen)

    if (isOpen) {
      // open
      detail.setAttribute('open', 'true');
      container.style.setProperty('height', '0');

      setTimeout(function () {
      const truHeight = content.offsetHeight;
        container.style.setProperty('height', truHeight + 'px');
      }, 50);

      container.ontransitionend = () => {
        container.style.setProperty('height', 'auto');
      }
    } else {
      // close
      const truHeight = content.offsetHeight;
      container.style.setProperty('height', truHeight + 'px');

      setTimeout(function () {
        container.style.setProperty('height', '0');
      }, 50);

      container.ontransitionend = () => {
        detail.removeAttribute('open');
        container.style.setProperty('height', 'auto');
      }
    }
  })

  const toggleOpen = (e: any) => {
    e.preventDefault();
    setOpen(!isOpen);
  }

  return (
    <details className={`details ${className ? className : ''}`}>
      <summary className="details__summary" onClick={toggleOpen}>
        {summary}
      </summary>
      <div ref={containerRef} className="details__container">
        <div className="details__content">
          {description}
        </div>
      </div>
    </details>
  )
}
