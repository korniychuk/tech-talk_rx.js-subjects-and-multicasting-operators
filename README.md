# Examples for TechTalk - RxJS Subject's & Multicasting operators.

**Author:** Anton Korniychuk 

**Video from the Tech Talk(ru):** [https://www.youtube.com/watch?v=Q28-P5jpzUs](https://www.youtube.com/watch?v=Q28-P5jpzUs)

**How to run:**

```
git clone git@github.com:ancor-dev/tech-talk_rx.js-subjects-and-multicasting-operators.git
cd tech-talk_rx.js-subjects-and-multicasting-operators

npm install
npm start ./examples/1.ts
```

**Description:**

RxJS Subject'ы стали источником путаницы и недопонимания для многих людей использующих RxJS. В то же время для тех для кто в них разобрался эти самые Subject'ы являются ответом на любой вопрос.

Subject'ы невероятно полезны и необходимы. Но ключ заключается в том что бы знать когда и какие использовать Subject'ы для решения проблем с которыми вы сталкиваетесь.

В этом TechTalk'е мы углубляемся в RxJS Subject'ы и multicasting операторы. Вы получите четкое представление о том, когда, где и как использовать эти мощные инструменты.

**Таймлайн TechTalk'а:**
```
00:00:00 00.   Введение. Для чего вам этот доклад? 
00:02:35 01.   Важно уяснить. Каждый .subscribe() вызывает выполнение всей цепочки.
00:03:25       Обзор используемых хелперов(из common.inc.ts) для вывода в консоль.
00:06:00 02.1. Что такое мультикастинг? Как Subject'ы работают изнутри.
00:07:45 02.2. Разбор Subject.
00:09:05 02.3. Использование Subject'а как EventEmitter.
00:10:55 03.   Разбор BehaviorSubject.
00:15:00 04.   Разбор ReplaySubject.
00:26:45 05.   Разбор AsyncSubject.
00:28:35 06.   Итог по *Subject'ам. Что когда использовать?
00:37:40 07.1. Введение в оператор .multicast(). Как работает? Для чего нужен?
00:45:35 07.2. Разбор ConnectableObservable.
00:47:55 07.3. Баг с типизацией .pipe() оператора в 6й версии RxJS. Временный хак.
00:48:45 07.4. Использование .multicast() с разными видами Subject'ов.
00:49:40 07.5. Как правильно отписываться от ConnectableObservable?
00:52:15 08.   Разбор оператора .refCount(). Как менеджить .connect() у ConnectableObservable?
00:58:25 09.1. Разбор оператора .publish(). Сокращения комбинаций с .multicast(...).
01:00:45 09.2. Разбор вариаций .publish(): .publishReplay(), .publishBehavior(), .publishLast().
01:01:20 10.   Разбор операторов .share(), .shareReplay(), .shareBehavior().
01:03:40 11.1. Разбор фабрик .multicast().
01:09:40 11.2. Селектор в .multicast().
01:16:05 12.   О чем будут дальнейшие доклады? Продолжение следует :)
01:16:55 13.   Ответы на вопросы.
01:18:05 14.   Итоги. Какие Subject'ы и разновидности .multicast() в каких случаях юзать?
```
