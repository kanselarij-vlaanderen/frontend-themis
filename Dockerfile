FROM madnificent/ember:5.12.0 AS builder

LABEL maintainer="info@redpencil.io"

WORKDIR /app
COPY package.json .
RUN npm install

COPY . .
RUN ember build -prod

FROM semtech/static-file-service:0.2.0

COPY nginx/app.conf /config/app.conf
COPY --from=builder /app/dist /data

ENV EMBER_VO_HEADER_WIDGET_URL=""
ENV EMBER_VO_FOOTER_WIDGET_URL=""
