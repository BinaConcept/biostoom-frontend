fBindingElement) {
            const bindingElementPropertySymbol = getPropertySymbolOfObjectBindingPatternWithoutPropertyName(symbol, checker);
            return bindingElementPropertySymbol && fromRoot(bindingElementPropertySymbol, 4 /* SearchedPropertyFoundLocal */);
          }
          function fromRoot(sym, kind) {
            return firstDefined(checker.getRootSymbols(sym), (rootSymbol) => cbSymbol(
              sym,
              rootSymbol,
              /*baseSymbol*/
              void 0,
              kind
            ) || (rootSymbol.parent && rootSymbol.parent.flags & (32 /* Class */ | 64 /* Interface */) && allowBaseTypes(rootSymbol) ? getPropertySymbolsFromBaseTypes(rootSymbol.parent, rootSymbol.name, checker, (base) => cbSymbol(sym, rootSymbol, base, kind)) : void 0));
          }
          function getPropertySymbolOfObjectBindingPatternWithoutPropertyName(symbol2, checker2) {
            const bindingElement = getDeclarationOfKind(symbol2, 207 /* BindingElement */);
            if (bindingElement && isObjectBindingElementWithoutPropertyName(bindingElement)) {
              return getPropertySymbolFromBindingElement(checker2, bindingElement);
            }
          }
        }
        function getPropertySymbolsFromBaseTypes(symbol, propertyName, checker, cb) {
          const seen = /* @__PURE__ */ new Map();
          return recur(symbol);
          function recur(symbol2) {
            if (!(symbol2.flags & (32 /* Class */ | 64 /* Interface */)) || !addToSeen(seen, getSymbolId(symbol2)))
              return;
            return firstDefined(symbol2.declarations, (declaration) => firstDefined(getAllSuperTypeNodes(declaration), (typeReference) => {
              const type = checker.getTypeAtLocation(typeReference);
              const propertySymbol = type && type.symbol && checker.getPropertyOfType(type, propertyName);
              return type && propertySymbol && (firstDefined(checker.getRootSymbols(propertySymbol), cb) || recur(type.symbol));
            }));
          }
        }
        function isStaticSymbol(symbol) {
          if (!symbol.valueDeclaration)
            return false;
          const modifierFlags = getEffectiveModifierFlags(symbol.valueDeclaration);
          return !!(modifierFlags & 32 /* Static */);
        }
        function getRelatedSymbol(search, referenceSymbol, referenceLocation, state) {
          const { checker } = state;
          return forEachRelatedSymbol(
            referenceSymbol,
            referenceLocation,
            checker,
            /*isForRenamePopulateSearchSymbolSet*/
            false,
            /*onlyIncludeBindingElementAtReferenceLocation*/
            state.options.use !== 2 /* Rename */ || !!state.options.providePrefixAndSuffixTextForRename,
            (sym, rootSymbol, baseSymbol, kind) => {
              if (baseSymbol) {
                if (isStaticSymbol(referenceSymbol) !== isStaticSymbol(baseSymbol)) {
                  baseSymbol = void 0;
                }
              }
              return search.includes(baseSymbol || rootSymbol || sym) ? { symbol: rootSymbol && !(getCheckFlags(sym) & 6 /* Synthetic */) ? rootSymbol : sym, kind } : void 0;
            },
            /*allowBaseTypes*/
            (rootSymbol) => !(search.parents && !search.parents.some((parent2) => explicitlyInheritsFrom(rootSymbol.parent, parent2, state.inheritsFromCache, checker)))
          );
        }
        function getIntersectingMeaningFromDeclarations(node, symbol) {
          let meaning = getMeaningFromLocation(node);
          const { declarations } = symbol;
          if (declarations) {
            let lastIterationMeaning;
            do {
              lastIterationMeaning = meaning;
              for (const declaration of declarations) {
                const declarationMeaning = getMeaningFromDeclaration(declaration);
                if (declarationMeaning & meaning) {
                  meaning |= declarationMeaning;
                }
              }
            } while (meaning !== lastIterationMeaning);
          }
          return meaning;
        }
        Core2.getIntersectingMeaningFromDeclarations = getIntersectingMeaningFromDeclarations;
        function isImplementation(node) {
          return !!(node.flags & 16777216 /* Ambient */) ? !(isInterfaceDeclaration(node) || isTypeAliasDeclaration(node)) : isVariableLike(node) ? hasInitializer(node) : isFunctionLikeDeclaration(node) ? !!node.body : isClassLike(node) || isModuleOrEnumDeclaration(node);
        }
        function getReferenceEntriesForShorthandPropertyAssignment(node, checker, addReference2) {
          const refSymbol = checker.getSymbolAtLocation(node);
          const shorthandSymbol = checker.getShorthandAssignmentValueSymbol(refSymbol.valueDeclaration);
          if (shorthandSymbol) {
            for (const declaration of shorthandSymbol.getDeclarations()) {
              if (getMeaningFromDeclaration(declaration) & 1 /* Value */) {
                addReference2(declaration);
              }
            }
          }
        }
        Core2.getReferenceEntriesForShorthandPropertyAssignment = getReferenceEntriesForShorthandPropertyAssignment;
        function forEachDescendantOfKind(node, kind, action) {
          forEachChild(node, (child) => {
            if (child.kind === kind) {
              action(child);
            }
            forEachDescendantOfKind(child, kind, action);
          });
        }
        function tryGetClassByExtendingIdentifier(node) {
          return tryGetClassExtendingExpressionWithTypeArguments(climbPastPropertyAccess(node).parent);
        }
        function getParentSymbolsOfPropertyAccess(location, symbol, checker) {
          const propertyAccessExpression = isRightSideOfPropertyAccess(location) ? location.parent : void 0;
          const lhsType = propertyAccessExpression && checker.getTypeAtLocation(propertyAccessExpression.expression);
          const res = mapDefined(lhsType && (lhsType.isUnionOrIntersection() ? lhsType.types : lhsType.symbol === symbol.parent ? void 0 : [lhsType]), (t) => t.symbol && t.symbol.flags & (32 /* Class */ | 64 /* Interface */) ? t.symbol : void 0);
          return res.length === 0 ? void 0 : res;
        }
        function isForRenameWithPrefixAndSuffixText(options) {
          return options.use === 2 /* Rename */ && options.providePrefixAndSuffixTextForRename;
        }
      })(Core || (Core = {}));
    }
  });

  // src/services/_namespaces/ts.FindAllReferences.ts
  var ts_FindAllReferences_exports = {};
  __export(ts_FindAllReferences_exports, {
    Core: () => Core,
    DefinitionKind: () => DefinitionKind,
    EntryKind: () => EntryKind,
    ExportKind: () => ExportKind2,
    FindReferencesUse: () => FindReferencesUse,
    ImportExport: () => ImportExport,
    createImportTracker: () => createImportTracker,
    findModuleReferences: () => findModuleReferences,
    findReferenceOrRenameEntries: () => findReferenceOrRenameEntries,
    findReferencedSymbols: () => findReferencedSymbols,
    getContextNode: () => getContextNode,
    getExportInfo: () => getExportInfo,
    getImplementationsAtPosition: () => getImplementationsAtPosition,
    getImportOrExportSymbol: () => getImportOrExportSymbol,
    getReferenceEntriesForNode: () => getReferenceEntriesForNode,
    getTextSpanOfEntry: () => getTextSpanOfEntry,
    isContextWithStartAndEndNode: () => isContextWithStartAndEndNode,
    isDeclarationOfSymbol: () => isDeclarationOfSymbol,
    nodeEntry: () => nodeEntry,
    toContextSpan: () => toContextSpan,
    toHighlightSpan: () => toHighlightSpan,
    toReferenceEntry: () => toReferenceEntry,
    toRenameLocation: () => toRenameLocation
  });
  var init_ts_FindAllReferences = __esm({
    "src/services/_namespaces/ts.FindAllReferences.ts"() {
      "use strict";
      init_importTracker();
      init_findAllReferences();
    }
  });

  // src/services/goToDefinition.ts
  function getDefinitionAtPosition(program, sourceFile, position, searchOtherFilesOnly, stopAtAlias) {
    var _a, _b;
    const resolvedRef = getReferenceAtPosition(sourceFile, position, program);
    const fileReferenceDefinition = resolvedRef && [getDefinitionInfoForFileReference(resolvedRef.reference.fileName, resolvedRef.fileName, resolvedRef.unverified)] || emptyArray;
    if (resolvedRef == null ? void 0 : resolvedRef.file) {
      return fileReferenceDefinition;
    }
    const node = getTouchingPropertyName(sourceFile, position);
    if (node === sourceFile) {
      return void 0;
    }
    const { parent: parent2 } = node;
    const typeChecker = program.getTypeChecker();
    if (node.kind === 163 /* OverrideKeyword */ || isIdentifier(node) && isJSDocOverrideTag(parent2) && parent2.tagName === node) {
      return getDefinitionFromOverriddenMember(typeChecker, node) || emptyArray;
    }
    if (isJumpStatementTarget(node)) {
      const label = getTargetLabel(node.parent, node.text);
      return label ? [createDefinitionInfoFromName(
        typeChecker,
        label,
        "label" /* label */,
        node.text,
        /*containerName*/
        void 0
      )] : void 0;
    }
    if (node.kind === 107 /* ReturnKeyword */) {
      const functionDeclaration = findAncestor(node.parent, (n) => isClassStaticBlockDeclaration(n) ? "quit" : isFunctionLikeDeclaration(n));
      return functionDeclaration ? [createDefinitionFromSignatureDeclaration(typeChecker, functionDeclaration)] : void 0;
    }
    if (node.kind === 135 /* AwaitKeyword */) {
      const functionDeclaration = findAncestor(node, (n) => isFunctionLikeDeclaration(n));
      const isAsyncFunction2 = functionDeclaration && some(functionDeclaration.modifiers, (node2) => node2.kind === 134 /* AsyncKeyword */);
      return isAsyncFunction2 ? [createDefinitionFromSignatureDeclaration(typeChecker, functionDeclaration)] : void 0;
    }
    if (node.kind === 127 /* YieldKeyword */) {
      const functionDeclaration = findAncestor(node, (n) => isFunctionLikeDeclaration(n));
      const isGeneratorFunction = functionDeclaration && functionDeclaration.asteriskToken;
      return isGeneratorFunction ? [createDefinitionFromSignatureDeclaration(typeChecker, functionDeclaration)] : void 0;
    }
    if (isStaticModifier(node) && isClassStaticBlockDeclaration(node.parent)) {
      const classDecl = node.parent.parent;
      const { symbol: symbol2, failedAliasResolution: failedAliasResolution2 } = getSymbol(classDecl, typeChecker, stopAtAlias);
      const staticBlocks = filter(classDecl.members, isClassStaticBlockDeclaration);
      const containerName = symbol2 ? typeChecker.symbolToString(symbol2, classDecl) : "";
      const sourceFile2 = node.getSourceFile();
      return map(staticBlocks, (staticBlock) => {
        let { pos } = moveRangePastModifiers(staticBlock);
        pos = skipTrivia(sourceFile2.text, pos);
        return createDefinitionInfoFromName(
          typeChecker,
          staticBlock,
          "constructor" /* constructorImplementationElement */,
          "static {}",
          containerName,
          /*unverified*/
          false,
          failedAliasResolution2,
          { start: pos, length: "static".length }
        );
      });
    }
    let { symbol, failedAliasResolution } = getSymbol(node, typeChecker, stopAtAlias);
    let fallbackNode = node;
    if (searchOtherFilesOnly && failedAliasResolution) {
      const importDeclaration = forEach([node, ...(symbol == null ? void 0 : symbol.declarations) || emptyArray], (n) => findAncestor(n, isAnyImportOrBareOrAccessedRequire));
      const moduleSpecifier = importDeclaration && tryGetModuleSpecifierFromDeclaration(importDeclaration);
      if (moduleSpecifier) {
        ({ symbol, failedAliasResolution } = getSymbol(moduleSpecifier, typeChecker, stopAtAlias));
        fallbackNode = moduleSpecifier;
      }
    }
    if (!symbol && isModuleSpecifierLike(fallbackNode)) {
      const ref = (_b = (_a = sourceFile.resolvedModules) == null ? void 0 : _a.get(fallbackNode.text, getMode