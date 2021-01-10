const Event = require('../models/Event');

module.exports = {
    async GetEventById(req, res) {
        const { eventId } = req.params;
        try {
            const event = await Event.findById(eventId)

            if (event) {
                return res.json(event)
            }
        } catch (error) {
            return res.status(400).json({ message: 'EventId does not exist!' })
        }
    },
    async GetAllEvents(req, res) {
        const { sport } = req.params;
        
        const query = { sport } || {}
        
        try {                   
            const events = await Event.find(query)
            
            if (events) {
                return res.json(events)
            }
        } catch (error) {
            return res.status(400).json({ message: 'No events yet!' })
        }
    },
}