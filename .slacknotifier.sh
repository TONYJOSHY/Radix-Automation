#!/bin/bash

set -euo pipefail


FAILURE=1
SUCCESS=0

SLACK_WEBHOOK="https://hooks.slack.com/services/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"
EXIT_STATUS=$?
function print_slack_summary() {

    local slack_msg_header
    local slack_msg_body
    local slack_channel

    # Populate header and define slack channels
    slack_msg_header=":x: *Deployment of front-end to <${CI_PIPELINE_URL}|${ENVIRONMENT}> failed!*"
    slack_msg_body="Project: <${CI_PROJECT_URL}|${CI_PROJECT_TITLE}> \n Branch: <${CI_PROJECT_URL}/-/tree/${CI_COMMIT_BRANCH}|${CI_COMMIT_BRANCH}> \n Initiator: ${GITLAB_USER_NAME} \n Commit: <${CI_PROJECT_URL}/commits/${CI_COMMIT_BRANCH}|${CI_COMMIT_REF_NAME}>- ${CI_COMMIT_MESSAGE}"
    msg_margin_colour="#961D13"
    msg_image="https://emojis.slackmojis.com/emojis/images/1542340464/4968/fart.gif?1542340464"
    if [[ "${EXIT_STATUS}" == "${SUCCESS}" ]]; then
        slack_msg_header="*Successfully Deployed the front-end to <${CI_PIPELINE_URL}|${ENVIRONMENT}>*"
        msg_margin_colour="#36a64f"
        msg_image="https://emojis.slackmojis.com/emojis/images/1450694616/220/bananadance.gif?1450694616"
    fi

    # Create slack message body
    cat <<-SLACK
      {
        "channel": "${SLACK_CHANNEL}",
        "attachments": [
          {
            "color": "${msg_margin_colour}",
            "blocks": [
              {
                "type": "section",
                "text": {
                  "type": "mrkdwn",
                  "text": "${slack_msg_header}"
                }
              },
              {
                "type": "section",
                "text": {
                  "type": "mrkdwn",
                  "text": "${slack_msg_body}"
                },
                "accessory": {
                  "type": "image",
                  "image_url": "${msg_image}",
                  "alt_text": "done"
                }
              }
            ]
          }
        ]
}
SLACK
}

function share_slack_update() {
    echo $(print_slack_summary)
    curl -X POST                                           \
        --data-urlencode "payload=$(print_slack_summary)"  \
        "${SLACK_WEBHOOK}"
}
