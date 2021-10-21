import React from "react"
import { Card } from "../card/Card"

type PagelayoutProps = {
  classname?: string;
}

export const Pagelayout: React.FC<PagelayoutProps> = ({ classname }) => {
  return (
    <div className={`page ${classname ? classname : ''}`}>
      <header>
        header
      </header>
      <main>
        <div className="row">
          <div className="column">
            <Card title={<h4>row1</h4>}/>
          </div>
          <div className="column">
            <Card title={<h4>row1</h4>}/>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <Card title={<h4>row2</h4>}/>
          </div>
          <div className="column">
            <Card title={<h4>row2</h4>}/>
            <Card title={<h4>row2</h4>}/>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <Card title={<h4>row3</h4>}/>
          </div>
          <div className="column">
            <Card title={<h4>row3</h4>}/>
          </div>
          <div className="column">
            <Card title={<h4>row3</h4>}/>
          </div>
        </div>
        <div className="row row--lightgray">
          <div className="column">
            <Card title={<h4>row3</h4>}/>
          </div>
          <div className="column">
            <Card title={<h4>row3</h4>}/>
          </div>
          <div className="column">
            <Card title={<h4>row3</h4>}/>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <Card title={<h4>row4</h4>}/>
          </div>
        </div>
      </main>
      <footer>
        footer
      </footer>
    </div>
  )
}
