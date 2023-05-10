import styles from './Avatar.module.css'

// Uma vez não especificado o valor, o default é utilizado
export function Avatar({ hasBorder = true, src}) {
  return (
    <img 
      className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
      src={src}
    />
  )
}