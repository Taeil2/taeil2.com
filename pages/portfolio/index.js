import { useState } from "react"

import Preview from "./preview"
import Modal from "./modal"
import projects from "./projects"

import styles from './index.module.scss'

export default function Portfolio() {
  const [showModal, setShowModal] = useState(false)
  const [modalProject, setModalProject] = useState()

  return <>
    <div className={styles.container}>
      {projects.map((project) => {
        return <Preview
          project={project}
          onClick={() => {
            setShowModal(true)
            setModalProject(project)
          }}
          key={project.slug}
        />
      })}
      <div></div>
      <div></div>
    </div>
    {showModal && <Modal project={modalProject} setShowModal={setShowModal} />}
  </>
}
