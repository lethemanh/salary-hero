# SALARY HERO API

## How to run

Run on local:

```
npm i
npm run start-ts
```

Run on other environments:

```
npm run build
npm run start-{env}
```

You can also run with:

```
NODE_ENV={env} npm run start
```

Create migration

```
npm run migration:create
```

## How to create Swagger route

1. Create Interface, Dto or Type

> Write this above them to make them easy to find

```
/**
 * @swagger
 * components:
 *   schemas:
 *     WorkerDto:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *         name:
 *           type: string
 */
```

2. Create API request

> Write the above API route

- **Workers:** This is a tag
- **schema > $ref:** This is request body ref with Dto defined above

```
/**
 * @openapi
 * /v1/workers:
 *   post:
 *     description: Create workers
 *     tags:
 *       - Workers
 *     security:
 *       - XToken: []
 *     parameters:
 *       - name: guestId
 *         in: path
 *         required: true
 *         description: ID of the guest
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/WorkerDto'
 *     responses:
 *       200:
 *         description: Successful operation
 */
```
