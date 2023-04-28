# SERVICE GAR
# 16 node потомучто sequelize
FROM node:gallium-slim
# FROM node:lts
# Установка зависимостей

# WORKDIR /GarBase
# Создание рабочей дериктории 

# COPY /folder/vue/dist/pwa/ /folder/vue/dist/pwa/
# Копирование  файлов фронта

COPY . .
# Копирование основных файлов

RUN npm install
# Для использования в продакшне
# RUN npm install --production
# VOLUME [ "/data" ]

EXPOSE 3001 3080 3081
# Уведомление о порте, который будет прослушивать работающее приложение


CMD ["node", "service.js"]
# Запуск проекта
