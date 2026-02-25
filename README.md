1. 𝗪𝗵𝗮𝘁 𝗶𝘀 𝘁𝗵𝗲 𝗱𝗶𝗳𝗳𝗲𝗿𝗲𝗻𝗰𝗲 𝗯𝗲𝘁𝘄𝗲𝗲𝗻 𝗴𝗲𝘁𝗘𝗹𝗲𝗺𝗲𝗻𝘁𝗕𝘆𝗜𝗱, 𝗴𝗲𝘁𝗘𝗹𝗲𝗺𝗲𝗻𝘁𝘀𝗕𝘆𝗖𝗹𝗮𝘀𝘀𝗡𝗮𝗺𝗲, 𝗮𝗻𝗱 𝗾𝘂𝗲𝗿𝘆𝗦𝗲𝗹𝗲𝗰𝘁𝗼𝗿 / 𝗾𝘂𝗲𝗿𝘆𝗦𝗲𝗹𝗲𝗰𝘁𝗼𝗿𝗔𝗹𝗹?

If we want to select a single element by using getElementById; or if we want to select multiple elements, we can used getElementsByClassName; if we use querySelector, we can target an ID, class, or tag name, but it only used for select the first matching element. or if we use querySelectorAll, we can setect the all matching element;

2. 𝗛𝗼𝘄 𝗱𝗼 𝘆𝗼𝘂 𝗰𝗿𝗲𝗮𝘁𝗲 𝗮𝗻𝗱 𝗶𝗻𝘀𝗲𝗿𝘁 𝗮 𝗻𝗲𝘄 𝗲𝗹𝗲𝗺𝗲𝗻𝘁 𝗶𝗻𝘁𝗼 𝘁𝗵𝗲 𝗗𝗢𝗠?

I create and insert a new elemnt using document.createElement() or appendChild();

3. 𝗪𝗵𝗮𝘁 𝗶𝘀 𝗘𝘃𝗲𝗻𝘁 𝗕𝘂𝗯𝗯𝗹𝗶𝗻𝗴? 𝗔𝗻𝗱 𝗵𝗼𝘄 𝗱𝗼𝗲𝘀 𝗶𝘁 𝘄𝗼𝗿𝗸?

Event Bubbling is system when an event starts from the target element and then return to its parent elements in the DOM.

4. 𝗪𝗵𝗮𝘁 𝗶𝘀 𝗘𝘃𝗲𝗻𝘁 𝗗𝗲𝗹𝗲𝗴𝗮𝘁𝗶𝗼𝗻 𝗶𝗻 𝗝𝗮𝘃𝗮𝗦𝗰𝗿𝗶𝗽𝘁? 𝗪𝗵𝘆 𝗶𝘀 𝗶𝘁 𝘂𝘀𝗲𝗳𝘂𝗹?

Event Delegation is a system we can used just single event listener to a parent element for using all child of this parent element;

5. 𝗪𝗵𝗮𝘁 𝗶𝘀 𝘁𝗵𝗲 𝗱𝗶𝗳𝗳𝗲𝗿𝗲𝗻𝗰𝗲 𝗯𝗲𝘁𝘄𝗲𝗲𝗻 𝗽𝗿𝗲𝘃𝗲𝗻𝘁𝗗𝗲𝗳𝗮𝘂𝗹𝘁() 𝗮𝗻𝗱 𝘀𝘁𝗼𝗽𝗣𝗿𝗼𝗽𝗮𝗴𝗮𝘁𝗶𝗼𝗻() 𝗺𝗲𝘁𝗵𝗼𝗱𝘀?

We can stops the elements default action by using preventDefault() or if we want to stops the event moving in the DOM, we can use stopPropagation();