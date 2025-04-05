import { BaseWebhookFormatter } from './base.js';
/**
 * Formatter for Discord webhooks
 */
export class DiscordWebhookFormatter extends BaseWebhookFormatter {
    formatMessage(message) {
        const embed = {
            title: message.title || 'Notification',
            description: message.body,
            color: 0x0099FF, // Blue color
        };
        // Add URL if provided
        if (message.link) {
            embed.url = message.link;
        }
        // Add image if provided
        if (message.imageUrl) {
            embed.image = {
                url: message.imageUrl
            };
        }
        return {
            content: message.title ? undefined : message.body, // Use content for simple messages
            embeds: [embed]
        };
    }
}
