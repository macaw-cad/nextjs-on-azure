import React from "react"

export type AccordeonProps = {
  summary: string;
  className?: string;
  open?: boolean;
}

export const Accordeon: React.FC<AccordeonProps> = ({ summary, className, open }) => {

  const onClick = (e: any) => {
    e.preventDefault();
    const detail = e.target.closest('details');
    const container = detail.querySelector('.details__container');
    let timer = parseFloat(window.getComputedStyle(container).getPropertyValue('transition-duration').replace(/[^\d.-]/g, ''));
    timer = timer < 5 ? timer * 1000 : timer;

    if (detail.hasAttribute('open')) {
      // close
      const truHeight = detail.querySelector('.details__content').offsetHeight;
      container.style.setProperty('height', truHeight + 'px');

      setTimeout(function () {
        container.style.setProperty('height', 0);
      }, 10);

      setTimeout(function () {
        detail.open = false;
        container.style.setProperty('height', 'auto');
      }, timer);

      console.log('timer', timer, typeof(timer));
      console.log('height', truHeight);

    } else {
      // open
      detail.open = true;
      const truHeight = detail.querySelector('.details__content').offsetHeight;
      container.style.setProperty('height', 0);

      setTimeout(function () {
        container.style.setProperty('height', truHeight + 'px');
      }, 10);

      setTimeout(function () {
        container.style.setProperty('height', 'auto');
      }, timer);
    }
  }

  return (
    <details className={`details ${className ? className : ''}`} open={open}>
      <summary className="details__summary" onClick={onClick}>
        {summary}
      </summary>
      <div className="details__container">
        <div className="details__content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ipsum architecto voluptatum, aspernatur et modi tenetur molestiae
            eius ab ea voluptatem id repudiandae aliquid sapiente,
            assumenda error repellat corrupti. Temporibus, harum.
          </p>
        </div>
      </div>
    </details>
  )
}
