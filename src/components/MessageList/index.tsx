import {api} from '../../services/api'

import styles from './styles.module.scss';
import logoImg from '../../assets/logo.svg';
import { useEffect } from 'react';

export function MessageList() {
  useEffect(() => {
    api.get('messages/last3').then(res => {
      console.log(res.data);
    })
  }, [])

  return (
    <div className={styles.MessageListWrapper}>
      <img src={logoImg} alt="Dowhile2021" />

      <ul className={styles.messageList}>
        <li className={styles.message}>
          <p className={styles.messageContent}> Não vejo a hora de começar esse eventp, com certeza vai ser o melhor de todos os tempos, vamooo pra cima</p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="https://github.com/carlinxoldz.png" alt="Carlos Guilherme" />
            </div>
            <span>Carlos Guilherme</span>
          </div>
        </li>
        <li className={styles.message}>
          <p className={styles.messageContent}> Não vejo a hora de começar esse eventp, com certeza vai ser o melhor de todos os tempos, vamooo pra cima</p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="https://github.com/carlinxoldz.png" alt="Carlos Guilherme" />
            </div>
            <span>Carlos Guilherme</span>
          </div>
        </li>
        <li className={styles.message}>
          <p className={styles.messageContent}> Não vejo a hora de começar esse eventp, com certeza vai ser o melhor de todos os tempos, vamooo pra cima</p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="https://github.com/carlinxoldz.png" alt="Carlos Guilherme" />
            </div>
            <span>Carlos Guilherme</span>
          </div>
        </li>
      </ul>
    </div>
  )
}